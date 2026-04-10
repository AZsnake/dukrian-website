import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { PageLayout } from './components/layout/PageLayout.tsx'

const BlackgoldMswPage = lazy(() => import('./pages/BlackgoldMswPage'))
const D24SultanPage = lazy(() => import('./pages/D24SultanPage'))
const DurianBundlesPage = lazy(() => import('./pages/DurianBundlesPage'))
const DurianDealsPage = lazy(() => import('./pages/DurianDealsPage'))
const DurianDeliveryPage = lazy(() => import('./pages/DurianDeliveryPage'))
const SameDayDeliveryPage = lazy(() => import('./pages/SameDayDeliveryPage'))
const DurianSeasonPage = lazy(() => import('./pages/DurianSeasonPage'))
const BigDuriansPage = lazy(() => import('./pages/BigDuriansPage'))
const HowToFindRipeDurianPage = lazy(() => import('./pages/HowToFindRipeDurianPage'))
const BestDurianVarietiesPage = lazy(() => import('./pages/BestDurianVarietiesPage'))

function ContentPage({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      <Suspense fallback={<div className="page-loading">Loading…</div>}>
        {children}
      </Suspense>
    </PageLayout>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blackgold-msw" element={<ContentPage><BlackgoldMswPage /></ContentPage>} />
          <Route path="/d24-sultan" element={<ContentPage><D24SultanPage /></ContentPage>} />
          <Route path="/durian-bundles" element={<ContentPage><DurianBundlesPage /></ContentPage>} />
          <Route path="/durian-deals" element={<ContentPage><DurianDealsPage /></ContentPage>} />
          <Route path="/durian-delivery" element={<ContentPage><DurianDeliveryPage /></ContentPage>} />
          <Route path="/same-day-durian-delivery" element={<ContentPage><SameDayDeliveryPage /></ContentPage>} />
          <Route path="/durian-season" element={<ContentPage><DurianSeasonPage /></ContentPage>} />
          <Route path="/big-durians" element={<ContentPage><BigDuriansPage /></ContentPage>} />
          <Route path="/how-to-find-ripe-good-durian" element={<ContentPage><HowToFindRipeDurianPage /></ContentPage>} />
          <Route path="/best-durian-varieties" element={<ContentPage><BestDurianVarietiesPage /></ContentPage>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
