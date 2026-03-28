import * as THREE from 'three'

/** GLB mesh names: 001/002 = halved, 003/004 = whole. */
export const WHOLE_MESH_NAMES = new Set(['AM130_019_003', 'AM130_019_004'])
export const CUT_MESH_NAMES = new Set(['AM130_019_001', 'AM130_019_002'])

export const FIT_TARGET_MAX = 3.45

export const LAYOUT = {
  OUTER_X_HERO: 1.72,
  OUTER_X_SCROLLED: 0.42,
} as const

export const MODEL_STEM_UP = 0

export const TILT_DAMP = 0.2
export const TILT_MAX_X = 0.2
export const TILT_MAX_Y = 0.2

/** Camera: hero keeps durian on the right; scrolled pulls camera closer to it. */
export const CAM_TOP = new THREE.Vector3(0.2, 5.5, 1.2)
export const CAM_TOP_TARGET = new THREE.Vector3(0.2, 0, 0)
export const CAM_ANGLED = new THREE.Vector3(0.2, 0.82, 3.5)
export const CAM_ANGLED_TARGET = new THREE.Vector3(0.2, 0, 0)
