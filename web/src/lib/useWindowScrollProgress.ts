import { useEffect, useRef, useState } from 'react'

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n))
}

/**
 * Passive window scroll → ref in [0, 1] for the Three.js render loop (no React re-renders per tick).
 * When `prefers-reduced-motion`, progress stays at 0.5.
 */
export function useWindowScrollProgress() {
  const progressRef = useRef(0)
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const el = document.documentElement

    const sync = () => {
      if (mq.matches) {
        progressRef.current = 0.5
        return
      }
      const scrollable = el.scrollHeight - window.innerHeight
      const p = scrollable <= 0 ? 0 : clamp01(window.scrollY / scrollable)
      progressRef.current = p
    }

    /** Coalesce scroll/resize reads into one layout pass per animation frame (pairs with WebGL rAF). */
    let syncScheduled = false
    let syncRaf = 0
    const scheduleSync = () => {
      if (syncScheduled) return
      syncScheduled = true
      syncRaf = requestAnimationFrame(() => {
        syncScheduled = false
        syncRaf = 0
        sync()
      })
    }

    const updateRm = () => {
      setReducedMotion(mq.matches)
      sync()
    }
    updateRm()
    mq.addEventListener('change', updateRm)
    window.addEventListener('scroll', scheduleSync, { passive: true })
    window.addEventListener('resize', scheduleSync, { passive: true })

    return () => {
      mq.removeEventListener('change', updateRm)
      window.removeEventListener('scroll', scheduleSync)
      window.removeEventListener('resize', scheduleSync)
      if (syncRaf) cancelAnimationFrame(syncRaf)
    }
  }, [])

  return { progressRef, reducedMotion }
}
