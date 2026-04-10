import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { DURIAN_MODEL_URL } from '../config'
import { buildDurianModel } from './durianGltfModel'
import {
  type ScrollDriverRefs,
  updateFallbackDurianFrame,
  updateGltfDurianFrame,
  updateScrollCamera,
} from './frameUpdates'
import { tuneMeshMaterialsForPerformance } from './meshPerfTuning'
import {
  IDLE_SNAPSHOT_FLOATS,
  snapshotsApproxEqual,
  writeSceneSnapshot,
} from './sceneIdleSnapshot'
import { resolveCanvasPixelRatio } from './adaptivePixelRatio'

const DRACO_DECODER_BASE = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

function createFallbackDurianGroup() {
  const g = new THREE.Group()
  g.name = 'durian-fallback'

  const body = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 2),
    new THREE.MeshStandardMaterial({
      color: '#3d6b32',
      roughness: 0.65,
      metalness: 0.08,
      flatShading: true,
    }),
  )
  body.scale.set(1.05, 1.2, 1.05)
  body.castShadow = true
  body.receiveShadow = true

  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.45, 1.2, 8),
    new THREE.MeshStandardMaterial({ color: '#5a4a3a', roughness: 0.9, metalness: 0 }),
  )
  stem.position.set(0, 0.85, 0)
  stem.scale.set(0.35, 0.5, 0.35)
  stem.castShadow = true
  stem.receiveShadow = true

  g.add(body, stem)
  g.scale.setScalar(1.18)
  body.matrixAutoUpdate = false
  stem.matrixAutoUpdate = false
  body.updateMatrix()
  stem.updateMatrix()
  return g
}

export type DurianThreeViewOptions = ScrollDriverRefs & {
  onLoadProgress: (active: boolean) => void
}

function disposeObject3D(root: THREE.Object3D) {
  root.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry?.dispose()
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
      for (const m of mats) m?.dispose()
    }
  })
}

export class DurianThreeView {
  private readonly container: HTMLElement
  private readonly opts: DurianThreeViewOptions
  private readonly renderer: THREE.WebGLRenderer
  private readonly scene: THREE.Scene
  private readonly camera: THREE.PerspectiveCamera
  private readonly outerGroup = new THREE.Group()
  private readonly resizeObserver: ResizeObserver
  private readonly idleSnapCur = new Float32Array(IDLE_SNAPSHOT_FLOATS)
  private readonly idleSnapLast = new Float32Array(IDLE_SNAPSHOT_FLOATS)
  private idleSnapshotValid = false
  private raf = 0
  private disposed = false
  private readonly onVisibilityChange = () => {
    if (this.disposed) return
    if (document.visibilityState === 'visible' && this.raf === 0) this.startLoop()
  }

  private mode: 'pending' | 'gltf' | 'fallback' = 'pending'
  private wholeGroup: THREE.Group | null = null
  private cutGroup: THREE.Group | null = null
  private modelRoot: THREE.Group | null = null
  private readonly tiltSmooth = { x: 0, y: 0 }
  private needsResize = false

  constructor(container: HTMLElement, opts: DurianThreeViewOptions) {
    this.container = container
    this.opts = opts
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80)
    this.camera.position.copy(new THREE.Vector3(2.6, 1.85, 5.2))

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#0c0f12')
    this.scene.environmentIntensity = 0.48

    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      stencil: false,
      depth: true,
      powerPreference: 'high-performance',
    })
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1
    this.renderer.sortObjects = false

    this.renderer.domElement.tabIndex = -1
    this.renderer.domElement.setAttribute('aria-hidden', 'true')
    this.container.appendChild(this.renderer.domElement)

    this.setupLights()
    this.setupGround()

    this.scene.add(this.outerGroup)

    this.deferEnvironmentMap()

    this.resizeObserver = new ResizeObserver(() => {
      if (this.disposed) return
      this.needsResize = true
    })
    this.resizeObserver.observe(this.container)
    this.resize()

    this.renderer.domElement.addEventListener('webglcontextlost', this.onContextLost, false)
    document.addEventListener('visibilitychange', this.onVisibilityChange)

    this.startLoop()
    void this.loadModel()
  }

  private onContextLost = (e: Event) => {
    e.preventDefault()
  }

  private setupLights() {
    const amb = new THREE.AmbientLight(0xffffff, 0.35)
    this.scene.add(amb)

    const key = new THREE.DirectionalLight(0xffffff, 1.35)
    key.position.set(4, 6, 3)
    key.castShadow = true
    key.shadow.mapSize.set(512, 512)
    key.shadow.camera.far = 20
    key.shadow.camera.left = -4
    key.shadow.camera.right = 4
    key.shadow.camera.top = 4
    key.shadow.camera.bottom = -4
    this.scene.add(key)

    const fill = new THREE.DirectionalLight(0xffefc4, 0.45)
    fill.position.set(-3, 2, -2)
    this.scene.add(fill)
  }

  private setupGround() {
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.ShadowMaterial({ opacity: 0.42 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -1.2
    ground.receiveShadow = true
    ground.matrixAutoUpdate = false
    ground.updateMatrix()
    this.scene.add(ground)
  }

  private deferEnvironmentMap() {
    const apply = () => {
      if (this.disposed) return
      const pmrem = new THREE.PMREMGenerator(this.renderer)
      const envScene = new RoomEnvironment()
      const rt = pmrem.fromScene(envScene, 0.04)
      this.scene.environment = rt.texture
      envScene.dispose()
      pmrem.dispose()
      this.idleSnapshotValid = false
    }
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(() => apply(), { timeout: 200 })
    } else {
      setTimeout(apply, 0)
    }
  }

  private createGltfLoader() {
    const loader = new GLTFLoader()
    const draco = new DRACOLoader()
    draco.setDecoderPath(DRACO_DECODER_BASE)
    loader.setDRACOLoader(draco)
    loader.setMeshoptDecoder(MeshoptDecoder)
    return loader
  }

  private async loadModel() {
    this.opts.onLoadProgress(true)
    try {
      await MeshoptDecoder.ready
    } catch {
      // Meshopt is optional for uncompressed GLBs
    }

    const loader = this.createGltfLoader()
    loader.load(
      DURIAN_MODEL_URL,
      (gltf) => {
        if (this.disposed) return
        this.clearOuterContent()
        this.modelRoot = buildDurianModel(gltf.scene)
        this.wholeGroup = this.modelRoot.getObjectByName('durian-whole') as THREE.Group
        this.cutGroup = this.modelRoot.getObjectByName('durian-cut') as THREE.Group
        this.outerGroup.add(this.modelRoot)
        this.mode = 'gltf'

        const maxA = this.renderer.capabilities.getMaxAnisotropy()
        tuneMeshMaterialsForPerformance(this.modelRoot, maxA)
        this.renderer.compile(this.scene, this.camera)

        this.opts.onLoadProgress(false)
      },
      undefined,
      (err) => {
        if (this.disposed) return
        console.warn(
          '[Dukrian] 3D model failed to load — using fallback mesh. Add web/public/models/durian-compressed.glb',
          err,
        )
        this.clearOuterContent()
        const fb = createFallbackDurianGroup()
        this.outerGroup.add(fb)
        this.mode = 'fallback'
        this.modelRoot = null
        this.wholeGroup = null
        this.cutGroup = null
        this.renderer.compile(this.scene, this.camera)
        this.opts.onLoadProgress(false)
      },
    )
  }

  private clearOuterContent() {
    while (this.outerGroup.children.length) {
      const ch = this.outerGroup.children[0]!
      this.outerGroup.remove(ch)
      disposeObject3D(ch)
    }
  }

  private resize() {
    if (this.disposed) return
    const w = Math.max(1, this.container.clientWidth)
    const h = Math.max(1, this.container.clientHeight)
    const dpr = resolveCanvasPixelRatio(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setPixelRatio(dpr)
    this.renderer.setSize(w, h)
    this.idleSnapshotValid = false
  }

  private tick = () => {
    if (this.disposed) return
    if (document.visibilityState === 'hidden') {
      this.raf = 0
      return
    }
    this.raf = requestAnimationFrame(this.tick)

    if (this.needsResize) {
      this.needsResize = false
      this.resize()
    }

    updateScrollCamera(this.camera, this.opts)

    if (this.mode === 'gltf' && this.wholeGroup && this.cutGroup) {
      updateGltfDurianFrame(
        {
          outer: this.outerGroup,
          wholeGroup: this.wholeGroup,
          cutGroup: this.cutGroup,
          tiltSmooth: this.tiltSmooth,
        },
        this.opts,
      )
    } else if (this.mode === 'fallback') {
      updateFallbackDurianFrame({ outer: this.outerGroup, tiltSmooth: this.tiltSmooth }, this.opts)
    }

    const scrollP = this.opts.reducedMotionRef.current ? 0.5 : this.opts.progressRef.current
    writeSceneSnapshot(
      this.camera,
      this.outerGroup,
      this.tiltSmooth.x,
      this.tiltSmooth.y,
      scrollP,
      this.idleSnapCur,
    )
    if (
      this.mode !== 'pending' &&
      this.idleSnapshotValid &&
      snapshotsApproxEqual(this.idleSnapCur, this.idleSnapLast)
    ) {
      return
    }

    this.renderer.render(this.scene, this.camera)

    if (this.mode !== 'pending') {
      this.idleSnapLast.set(this.idleSnapCur)
      this.idleSnapshotValid = true
    }
  }

  private startLoop() {
    this.raf = requestAnimationFrame(this.tick)
  }

  dispose() {
    this.disposed = true
    cancelAnimationFrame(this.raf)
    this.resizeObserver.disconnect()
    this.renderer.domElement.removeEventListener('webglcontextlost', this.onContextLost)
    document.removeEventListener('visibilitychange', this.onVisibilityChange)

    this.clearOuterContent()

    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry?.dispose()
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
        for (const m of mats) m?.dispose()
      }
    })

    this.scene.environment?.dispose()
    this.scene.environment = null
    this.scene.background = null

    this.renderer.dispose()
    if (this.renderer.domElement.parentElement === this.container) {
      this.container.removeChild(this.renderer.domElement)
    }
  }
}
