import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/query-core'
import type { Theme } from '@/core/schemas'

import { envClient } from '@/env.client'
import { useTheme } from '@/core/theme/useTheme'
import { cn } from '@/integrations/shadcn/lib/utils'
import { NotFound } from '@/core/components/NotFound'
import { ThemeProvider } from '@/core/theme/ThemeProvider'
import { getInitialPreferencesFn } from '@/backend/preferences/queries'
import TanStackQueryDevtools from '@/integrations/tanstack-query/devtools'

interface MyRouterContext {
  initialTheme: Theme | null
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  async beforeLoad() {
    const { initialTheme } = await getInitialPreferencesFn()
    return { initialTheme }
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
  const { initialTheme } = Route.useRouteContext()

  return (
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
  )
}

function RootDocumentContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <html>
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
