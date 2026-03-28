import { SITE } from '../config'

type Props = {
  /** Header uses larger type; footer matches body column width. */
  variant: 'header' | 'footer'
}

export function BrandMark({ variant }: Props) {
  const isHeader = variant === 'header'
  return (
    <span className={`brand-mark${isHeader ? ' brand-mark--header' : ' brand-mark--footer'}`}>
      <span className="brand-mark__title">{SITE.name}</span>
      <span className="brand-mark__cn">{SITE.nameCn}</span>
      <span className="brand-mark__sg">Singapore</span>
    </span>
  )
}
