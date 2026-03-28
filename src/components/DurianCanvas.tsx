import { useEffect, useRef } from 'react'
import { useScrollScene } from '../ScrollSceneContext'
import { DurianThreeView } from '../three/DurianThreeView'

type Props = {
  onLoadProgress: (active: boolean) => void
}

export function DurianCanvas({ onLoadProgress }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { progressRef, pointerRef, reducedMotionRef } = useScrollScene()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const view = new DurianThreeView(el, {
      onLoadProgress,
      progressRef,
      pointerRef,
      reducedMotionRef,
    })

    return () => view.dispose()
  }, [onLoadProgress, progressRef, pointerRef, reducedMotionRef])

  return <div ref={containerRef} className="durian-canvas" aria-hidden />
}
