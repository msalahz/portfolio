import { useTranslation } from 'react-i18next'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/query-core'

import type { i18n } from 'i18next'
import type { Language, Theme } from '@/core/schemas'

import { envClient } from '@/env.client'
import { useTheme } from '@/core/theme/useTheme'
import { cn } from '@/integrations/shadcn/lib/utils'
import { NotFound } from '@/core/components/NotFound'
import { defaultNS } from '@/integrations/i18n/resources'
import { ThemeProvider } from '@/core/theme/ThemeProvider'
import { LanguageProvider } from '@/integrations/i18n/LanguageProvider'
import { getInitialPreferencesFn } from '@/backend/preferences/queries'
import TanStackQueryDevtools from '@/integrations/tanstack-query/devtools'

interface MyRouterContext {
  i18n: i18n
  initialTheme: Theme | null
  initialLanguage: Language | null
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  async beforeLoad() {
    const { initialTheme, initialLanguage } = await getInitialPreferencesFn()
    return { initialTheme, initialLanguage }
  },

  shellComponent: RootDocument,
  notFoundComponent: () => {
    return (
      <div className="flex min-h-screen flex-col">
        <NotFound />
      </div>
    )
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Dev Plus Coder' },
      { name: 'author', content: 'Mohammed Zaghloul' },
      { name: 'description', content: 'Portfolio of Dev Plus Coder' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { initialTheme, initialLanguage, i18n } = Route.useRouteContext()

  return (
    <LanguageProvider i18n={i18n} initialLanguage={initialLanguage} defaultNS={defaultNS}>
      <ThemeProvider initialTheme={initialTheme}>
        <RootDocumentContent>{children}</RootDocumentContent>
        {envClient.VITE_ENABLE_TANSTACK_DEVTOOLS === 'true' ? (
          <TanStackDevtools
            config={{ position: 'bottom-right', theme: 'light' }}
            plugins={[
              { name: 'TanStack Router', render: <TanStackRouterDevtoolsPanel /> },
              TanStackQueryDevtools,
            ]}
          />
        ) : null}
      </ThemeProvider>
    </LanguageProvider>
  )
}

function RootDocumentContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const { i18n } = useTranslation()

  return (
    <html lang={i18n.language} dir={i18n.dir(i18n.language)}>
      <head>
        <meta rel="icon" />
        <HeadContent />
      </head>
      <body suppressHydrationWarning className={cn(theme)}>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
