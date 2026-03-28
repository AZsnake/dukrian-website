import * as THREE from 'three'

const TEXTURE_KEYS = [
  'map',
  'normalMap',
  'roughnessMap',
  'metalnessMap',
  'aoMap',
  'emissiveMap',
  'alphaMap',
  'lightMap',
  'bumpMap',
  'displacementMap',
] as const

/** Lower anisotropic filtering cost on common PBR maps. */
export function tuneMeshMaterialsForPerformance(root: THREE.Object3D, maxAnisotropy: number) {
  const capA = Math.max(1, Math.min(4, maxAnisotropy))
  root.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return
    obj.frustumCulled = true
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
    for (const mat of mats) {
      if (!(mat instanceof THREE.MeshStandardMaterial)) continue
      const m = mat as unknown as Record<string, unknown>
      for (const key of TEXTURE_KEYS) {
        const tex = m[key]
        if (tex instanceof THREE.Texture) tex.anisotropy = capA
      }
    }
  })
}
