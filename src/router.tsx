import { createRouter } from '@tanstack/react-router'

import * as Sentry from '@sentry/tanstackstart-react'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import * as TanstackQuery from '@/integrations/tanstack-query/rootProvider'

// Create a new router instance
export const getRouter = () => {
  const rqContext = TanstackQuery.getContext()

  const router = createRouter({
    routeTree,
    context: {
      initialTheme: null,
      ...rqContext,
    },

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,

    defaultPreload: 'intent',
    Wrap: (props: { children: React.ReactNode }) => {
      return <TanstackQuery.Provider {...rqContext}>{props.children}</TanstackQuery.Provider>
    },
  })

  if (!router.isServer) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      integrations: [],
      tracesSampleRate: 1.0,
      sendDefaultPii: true,
    })
  }

  return router
}
