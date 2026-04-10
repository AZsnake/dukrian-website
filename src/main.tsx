import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource-variable/fraunces/opsz-italic.css'
import '@fontsource-variable/outfit/index.css'
import './index.css'
import { initScrollReveal } from './lib/scrollReveal'
import App from './App.tsx'
import { PageLayout } from './components/layout/PageLayout.tsx'
import { Loader } from './components/Loader.tsx'

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
      <Suspense fallback={<div className="page-loading"><Loader /></div>}>
        {children}
      </Suspense>
    </PageLayout>
  )
}

/** Static export: dist/<segment>/index.html. Canonical URLs end with a trailing slash. */
const pageRoutes = (
  <>
    <Route path="/blackgold-msw/" element={<ContentPage><BlackgoldMswPage /></ContentPage>} />
    <Route path="/d24-sultan/" element={<ContentPage><D24SultanPage /></ContentPage>} />
    <Route path="/durian-bundles/" element={<ContentPage><DurianBundlesPage /></ContentPage>} />
    <Route path="/durian-deals/" element={<ContentPage><DurianDealsPage /></ContentPage>} />
    <Route path="/durian-delivery/" element={<ContentPage><DurianDeliveryPage /></ContentPage>} />
    <Route path="/same-day-durian-delivery/" element={<ContentPage><SameDayDeliveryPage /></ContentPage>} />
    <Route path="/durian-season/" element={<ContentPage><DurianSeasonPage /></ContentPage>} />
    <Route path="/big-durians/" element={<ContentPage><BigDuriansPage /></ContentPage>} />
    <Route path="/how-to-find-ripe-good-durian/" element={<ContentPage><HowToFindRipeDurianPage /></ContentPage>} />
    <Route path="/best-durian-varieties/" element={<ContentPage><BestDurianVarietiesPage /></ContentPage>} />
  </>
)

initScrollReveal()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {pageRoutes}
          <Route path="/blackgold-msw" element={<Navigate to="/blackgold-msw/" replace />} />
          <Route path="/d24-sultan" element={<Navigate to="/d24-sultan/" replace />} />
          <Route path="/durian-bundles" element={<Navigate to="/durian-bundles/" replace />} />
          <Route path="/durian-deals" element={<Navigate to="/durian-deals/" replace />} />
          <Route path="/durian-delivery" element={<Navigate to="/durian-delivery/" replace />} />
          <Route path="/same-day-durian-delivery" element={<Navigate to="/same-day-durian-delivery/" replace />} />
          <Route path="/durian-season" element={<Navigate to="/durian-season/" replace />} />
          <Route path="/big-durians" element={<Navigate to="/big-durians/" replace />} />
          <Route path="/how-to-find-ripe-good-durian" element={<Navigate to="/how-to-find-ripe-good-durian/" replace />} />
          <Route path="/best-durian-varieties" element={<Navigate to="/best-durian-varieties/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
