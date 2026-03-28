import * as THREE from 'three'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js'
import {
  CUT_MESH_NAMES,
  FIT_TARGET_MAX,
  MODEL_STEM_UP,
  WHOLE_MESH_NAMES,
} from './durianConstants'

export function buildDurianModel(scene: THREE.Object3D) {
  const root = new THREE.Group()
  const whole = new THREE.Group()
  const cut = new THREE.Group()
  whole.name = 'durian-whole'
  cut.name = 'durian-cut'
  cut.visible = false

  const cloned = clone(scene)
  const loose = [...cloned.children]
  for (const ch of loose) {
    if (WHOLE_MESH_NAMES.has(ch.name)) whole.add(ch)
    else if (CUT_MESH_NAMES.has(ch.name)) cut.add(ch)
  }

  // Translate children so the whole durian's visual centre sits at the group's local origin.
  // This means setting wholeGroup.position = (0,0,0) in frame updates will always centre it.
  if (whole.children.length > 0) {
    const box = new THREE.Box3().setFromObject(whole)
    const centre = box.getCenter(new THREE.Vector3())
    for (const child of [...whole.children]) {
      child.position.sub(centre)
    }
  }

  root.add(whole, cut)

  // Scale root so the whole durian fills FIT_TARGET_MAX units in its largest dimension.
  const fitBox = new THREE.Box3().setFromObject(whole)
  const size = fitBox.getSize(new THREE.Vector3())
  const maxDim = Math.max(size.x, size.y, size.z, 1e-6)
  root.scale.setScalar(FIT_TARGET_MAX / maxDim)

  root.rotation.x = MODEL_STEM_UP

  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true
      child.receiveShadow = true
      if (!(child instanceof THREE.SkinnedMesh)) {
        child.matrixAutoUpdate = false
        child.updateMatrix()
      }
    }
  })

  return root
}
