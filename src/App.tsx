import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { PricingSection } from './components/PricingSection'
import { IntegrationsSection } from './components/IntegrationsSection'
import { AccessSteps } from './components/AccessSteps'
import { FaqSection } from './components/FaqSection'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 transition-colors duration-200 selection:bg-blue-100 selection:text-blue-900">
      <main className="flex-1">
        {/* 1. Hero Section (Untouched) */}
        <Hero />

        {/* 2. Why this exists: Replace five subscriptions with one workspace */}
        <AboutSection />

        {/* 3. Pricing */}
        <PricingSection />

        {/* 4. Integrations */}
        <IntegrationsSection />

        {/* 5. Access Steps */}
        <AccessSteps />

        {/* 6. FAQ */}
        <FaqSection />

        {/* 7. Final CTA */}
        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}

export default App
