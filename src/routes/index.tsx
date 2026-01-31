import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <div className="flex gap-4 p-6">Dev Plus Coder</div>
}
