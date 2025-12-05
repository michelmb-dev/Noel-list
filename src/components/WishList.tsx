import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {}

export function WishList({ children }: Props) {
  return (
    <div className="wishlist">
      <div className="wishlist-grid">{children}</div>
    </div>
  )
}
