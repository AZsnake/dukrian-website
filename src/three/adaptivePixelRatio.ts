/**
 * Fullscreen WebGL cost scales ~with (cssWidth × cssHeight × dpr²). Small windows feel
 * “smooth” because they shade far fewer pixels; this keeps framebuffer work in a stable band.
 */
const DEFAULT_FRAMEBUFFER_PIXEL_BUDGET = 1_650_000

/** Never request more than this (still limited by `devicePixelRatio`). */
const MAX_DPR = 1.3

/** Below this, PBR can look too soft; large monitors still benefit. */
export const MIN_CANVAS_DPR = 0.62

function dataSaverBudgetScale(): number {
  if (typeof window === 'undefined') return 1
  try {
    if (window.matchMedia('(prefers-reduced-data: reduce)').matches) return 0.78
  } catch {
    /* ignore */
  }
  return 1
}

/**
 * Effective `WebGLRenderer.setPixelRatio` for a CSS-sized fullscreen canvas.
 * Large viewports → lower dpr; small viewports → up to `MAX_DPR`.
 */
export function resolveCanvasPixelRatio(cssWidth: number, cssHeight: number): number {
  const sys = typeof window !== 'undefined' && window.devicePixelRatio > 0 ? window.devicePixelRatio : 1
  const area = Math.max(1, cssWidth * cssHeight)
  const budget = DEFAULT_FRAMEBUFFER_PIXEL_BUDGET * dataSaverBudgetScale()
  const dprFromBudget = Math.sqrt(budget / area)
  return Math.min(sys, MAX_DPR, Math.max(MIN_CANVAS_DPR, dprFromBudget))
}
