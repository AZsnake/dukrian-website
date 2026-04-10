/**
 * Unified branded loader used for both the WebGL scene overlay
 * and lazy-loaded content page fallbacks.
 */
export function Loader({ overlay }: { overlay?: boolean }) {
  const Tag = overlay ? 'div' : 'div'
  return (
    <Tag
      className={`loader${overlay ? ' loader--overlay' : ''}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loader__dots" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <p className="loader__text">Your Durian Is On Its Way</p>
    </Tag>
  )
}
