import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/query-core'

import { envClient } from '@/env.client'
import { NotFound } from '@/core/components/NotFound'
import TanStackQueryDevtools from '@/integrations/tanstack-query/devtools'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
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
  return (
    <html lang="en" className="light">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        {envClient.VITE_ENABLE_TANSTACK_DEVTOOLS === 'true' ? (
          <TanStackDevtools
            config={{ position: 'bottom-right', theme: 'light' }}
            plugins={[
              { name: 'TanStack Router', render: <TanStackRouterDevtoolsPanel /> },
              TanStackQueryDevtools,
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  )
}
