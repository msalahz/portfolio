import { createFileRoute } from '@tanstack/react-router'
import { ThemeToggle } from '@/core/theme/ThemeToggle'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex gap-4 p-6">
      <ThemeToggle />
    </div>
  )
}
