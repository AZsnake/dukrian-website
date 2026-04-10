import { useEffect } from 'react'
import { CartProvider } from '../../CartContext'
import { Header } from './Header'
import { Footer } from './Footer'
import { Cart } from '../Cart'

export function PageLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <CartProvider>
      <div className="app">
        <div className="content-layer content-layer--page">
          <Header />
          <main className="page-main">{children}</main>
          <Footer />
        </div>
        <Cart />
      </div>
    </CartProvider>
  )
}
