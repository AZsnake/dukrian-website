let observer: IntersectionObserver | null = null

/**
 * Starts a shared IntersectionObserver that watches all `.reveal` elements
 * and adds `.revealed` once they enter the viewport. Each element is
 * unobserved after reveal so no ongoing cost.
 *
 * A MutationObserver picks up dynamically-added `.reveal` elements
 * (Suspense, lazy routes, etc).
 */
export function initScrollReveal() {
  if (observer) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer!.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  )

  const observe = (el: Element) => observer!.observe(el)

  document.querySelectorAll('.reveal').forEach(observe)

  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        if (node.classList.contains('reveal')) observe(node)
        node.querySelectorAll('.reveal').forEach(observe)
      }
    }
  })

  mo.observe(document.body, { childList: true, subtree: true })
}
