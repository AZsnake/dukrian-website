import * as THREE from 'three'
import {
  CAM_ANGLED,
  CAM_ANGLED_TARGET,
  CAM_TOP,
  CAM_TOP_TARGET,
  LAYOUT,
  TILT_DAMP,
  TILT_MAX_X,
  TILT_MAX_Y,
} from './durianConstants'
import { easeInOutCubic, smoothstep } from '../lib/easing'

/** Mutable refs from React — read each animation frame. */
export type ScrollDriverRefs = {
  progressRef: { current: number }
  pointerRef: { current: { x: number; y: number } }
  reducedMotionRef: { current: boolean }
}

const tmpP = new THREE.Vector3()
const tmpT = new THREE.Vector3()

export function updateScrollCamera(camera: THREE.PerspectiveCamera, refs: ScrollDriverRefs) {
  const pRaw = refs.reducedMotionRef.current ? 0.5 : refs.progressRef.current
  const tCam = easeInOutCubic(pRaw)
  const tFraming = smoothstep(0.18, 0.72, pRaw)

  tmpP.lerpVectors(CAM_TOP, CAM_ANGLED, tCam)
  tmpT.lerpVectors(CAM_TOP_TARGET, CAM_ANGLED_TARGET, tFraming)

  camera.position.copy(tmpP)
  camera.lookAt(tmpT)
}

type GltfAnimState = {
  outer: THREE.Group
  wholeGroup: THREE.Group
  cutGroup: THREE.Group
  tiltSmooth: { x: number; y: number }
}

export function updateGltfDurianFrame(state: GltfAnimState, refs: ScrollDriverRefs) {
  const { outer, wholeGroup, cutGroup, tiltSmooth } = state
  const p = refs.reducedMotionRef.current ? 0.5 : refs.progressRef.current
  const tFraming = easeInOutCubic(smoothstep(0, 0.72, p))

  cutGroup.visible = false
  wholeGroup.visible = true
  wholeGroup.position.set(0, 0, 0)

  const pr = refs.pointerRef.current
  if (refs.reducedMotionRef.current) {
    tiltSmooth.x = 0
    tiltSmooth.y = 0
  } else {
    tiltSmooth.x += (pr.x - tiltSmooth.x) * TILT_DAMP
    tiltSmooth.y += (pr.y - tiltSmooth.y) * TILT_DAMP
  }

  outer.rotation.x = -tiltSmooth.y * TILT_MAX_X
  outer.rotation.y = tiltSmooth.x * TILT_MAX_Y
  outer.rotation.z = 0

  outer.position.x = THREE.MathUtils.lerp(LAYOUT.OUTER_X_HERO, LAYOUT.OUTER_X_SCROLLED, tFraming)
  outer.position.y = -0.18 + Math.sin(p * Math.PI * 1.2) * 0.038
  outer.position.z = 0
}

type FallbackAnimState = {
  outer: THREE.Group
  tiltSmooth: { x: number; y: number }
}

export function updateFallbackDurianFrame(state: FallbackAnimState, refs: ScrollDriverRefs) {
  const { outer, tiltSmooth } = state
  const p = refs.reducedMotionRef.current ? 0.5 : refs.progressRef.current
  const pr = refs.pointerRef.current
  if (refs.reducedMotionRef.current) {
    tiltSmooth.x = 0
    tiltSmooth.y = 0
  } else {
    tiltSmooth.x += (pr.x - tiltSmooth.x) * TILT_DAMP
    tiltSmooth.y += (pr.y - tiltSmooth.y) * TILT_DAMP
  }
  outer.rotation.x = -tiltSmooth.y * TILT_MAX_X
  outer.rotation.y = tiltSmooth.x * TILT_MAX_Y
  outer.rotation.z = 0
  outer.position.x = 0.66
  outer.position.y = -0.15 + Math.sin(p * Math.PI * 1.2) * 0.05
  outer.position.z = 0
}
