import { useState } from 'react'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { EightModulesSection } from './components/EightModulesSection'
import { ModulesWorkbenchShowcase } from './components/ModulesWorkbenchShowcase'
import { PricingSection } from './components/PricingSection'
import { IntegrationsSection } from './components/IntegrationsSection'
import { AccessSteps } from './components/AccessSteps'
import { FaqSection } from './components/FaqSection'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

export function App() {
  const [activeShowcaseSlide, setActiveShowcaseSlide] = useState(0)

  const handleSelectModule = (moduleId: string) => {
    if (moduleId === 'billing') setActiveShowcaseSlide(0)
    else if (moduleId === 'crm') setActiveShowcaseSlide(1)
    else if (moduleId === 'bookings') setActiveShowcaseSlide(2)
    else if (moduleId === 'tasks') setActiveShowcaseSlide(3)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 transition-colors duration-200 selection:bg-blue-100 selection:text-blue-900">
      <main className="flex-1">
        {/* 1. Hero Section (Built according to UI reference - Untouched) */}
        <Hero />

        {/* 2. Why this exists: Replace five subscriptions with one workspace (Problem-Fix tree flowchart) */}
        <AboutSection />

        {/* 3. Eight modules. One login. (8 module pills, marquee ticker, Request access CTA) */}
        <EightModulesSection onSelectModule={handleSelectModule} />

        {/* 4. See modules in the workbench (Interactive Billing, CRM, Bookings, Tasks slider) */}
        <ModulesWorkbenchShowcase initialSlide={activeShowcaseSlide} />

        {/* 5. Pricing built for solopreneurs & studios (Solo $29, Hustler $59, Empire $129 - Team Included) */}
        <PricingSection />

        {/* 6. Tools That Work For You (Orbital Radar Hub + Solos AI Roadmap Preview) */}
        <IntegrationsSection />

        {/* 7. Live in minutes, not a week of setup (3-step onboarding) */}
        <AccessSteps />

        {/* 8. Questions before you request access (FAQ from mock.ts) */}
        <FaqSection />

        {/* 9. Final Call to Action (90 days free on chosen plan) */}
        <FinalCta />
      </main>

      {/* 10. Footer with Rolling Green Hills Landscape */}
      <Footer />
    </div>
  )
}

export default App
