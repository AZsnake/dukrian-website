import { Link, type LinkProps } from 'react-router-dom'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'header'

type BaseProps = {
  variant?: Variant
  small?: boolean
  children: ReactNode
}

type AsLink = BaseProps & { to: string } & Omit<LinkProps, 'to' | 'className'>
type AsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { to?: never }

type BtnLinkProps = AsLink | AsAnchor

function cls(variant: Variant, small?: boolean) {
  return `btn btn--${variant}${small ? ' btn--sm' : ''}`
}

export function BtnLink({
  variant = 'primary',
  small,
  children,
  ...rest
}: BtnLinkProps) {
  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest as AsLink
    return (
      <Link to={to} className={cls(variant, small)} {...linkRest}>
        {children}
      </Link>
    )
  }

  const { to: _, ...anchorRest } = rest as AsAnchor
  return (
    <a className={cls(variant, small)} {...anchorRest}>
      {children}
    </a>
  )
}
