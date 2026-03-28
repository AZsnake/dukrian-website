import * as THREE from 'three'

/** Floats: camera pos(3) quat(4) outer pos(3) rot(3) tilt(2) scroll progress(1) */
export const IDLE_SNAPSHOT_FLOATS = 16

const EPS = 2.5e-4

export function writeSceneSnapshot(
  camera: THREE.PerspectiveCamera,
  outer: THREE.Group,
  tiltX: number,
  tiltY: number,
  scrollProgress: number,
  out: Float32Array,
) {
  let i = 0
  out[i++] = camera.position.x
  out[i++] = camera.position.y
  out[i++] = camera.position.z
  out[i++] = camera.quaternion.x
  out[i++] = camera.quaternion.y
  out[i++] = camera.quaternion.z
  out[i++] = camera.quaternion.w
  out[i++] = outer.position.x
  out[i++] = outer.position.y
  out[i++] = outer.position.z
  out[i++] = outer.rotation.x
  out[i++] = outer.rotation.y
  out[i++] = outer.rotation.z
  out[i++] = tiltX
  out[i++] = tiltY
  out[i++] = scrollProgress
}

export function snapshotsApproxEqual(a: Float32Array, b: Float32Array, len = IDLE_SNAPSHOT_FLOATS): boolean {
  for (let j = 0; j < len; j++) {
    if (Math.abs(a[j] - b[j]) > EPS) return false
  }
  return true
}
