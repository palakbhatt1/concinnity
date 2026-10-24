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
        <Hero />

        <AboutSection />

        <EightModulesSection onSelectModule={handleSelectModule} />

        <ModulesWorkbenchShowcase initialSlide={activeShowcaseSlide} />

        <PricingSection />

        <IntegrationsSection />

        <AccessSteps />

        <FaqSection />

        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}

export default App
