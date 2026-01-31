import { createServerFn } from '@tanstack/react-start'

import { themeSchema } from '@/core/schemas'
import { setThemeCookie } from '@/backend/preferences/lib'

export const setThemeCookieFn = createServerFn({ method: 'POST' })
  .inputValidator(themeSchema)
  .handler(({ data: theme }) => setThemeCookie(theme))
