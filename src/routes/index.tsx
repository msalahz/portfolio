import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/features/landing/components/HeroSection'
import { AboutSection } from '@/features/landing/components/AboutSection'
import { StatsSection } from '@/features/landing/components/StatsSections'
import { FooterSection } from '@/features/landing/components/FooterSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <FooterSection />
    </div>
  )
}
