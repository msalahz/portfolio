import { createFileRoute } from '@tanstack/react-router'
import { Background } from '@/core/components/Background'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <Background />
}
