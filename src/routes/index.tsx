import { createFileRoute } from '@tanstack/react-router'
import { ThemeToggle } from '@/core/theme/ThemeToggle'
import { LanguageToggle } from '@/integrations/i18n/LanguageToggle'
import { WithTranslation } from '@/core/components/WithTranslation'
import { WithOutTranslation } from '@/core/components/WithOutTranslation'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex gap-4 p-6">
      <ThemeToggle />
      <LanguageToggle />
      <WithTranslation />
      <WithOutTranslation />
    </div>
  )
}
