import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/features/landing/components/HeroSection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <HeroSection />
    </div>
  )
}
