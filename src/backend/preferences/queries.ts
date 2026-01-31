import { createServerFn } from '@tanstack/react-start'

import { getInitialPreferences } from '@/backend/preferences/lib'

export const getInitialPreferencesFn = createServerFn().handler(() => {
  return getInitialPreferences()
})
