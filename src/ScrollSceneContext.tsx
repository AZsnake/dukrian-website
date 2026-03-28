import { createContext, useContext, type RefObject } from 'react'

export type PointerNorm = { x: number; y: number }

export type ScrollSceneContextValue = {
  progressRef: RefObject<number>
  reducedMotion: boolean
  /** Latest `reducedMotion` for the Three.js loop (synced in an effect). */
  reducedMotionRef: RefObject<boolean>
  /** Normalized cursor in [-1, 1] (window coords); for 3D tilt */
  pointerRef: RefObject<PointerNorm>
}

export const ScrollSceneContext = createContext<ScrollSceneContextValue | null>(null)

export function useScrollScene() {
  const ctx = useContext(ScrollSceneContext)
  if (!ctx) throw new Error('useScrollScene must be used within ScrollSceneContext.Provider')
  return ctx
}
