import { createServerFn } from '@tanstack/react-start'

import { languageSchema, themeSchema } from '@/core/schemas'
import { setLanguageCookie, setThemeCookie } from '@/backend/preferences/lib'

export const setThemeCookieFn = createServerFn({ method: 'POST' })
  .inputValidator(themeSchema)
  .handler(({ data: theme }) => setThemeCookie(theme))

export const setLanguageCookieFn = createServerFn({ method: 'POST' })
  .inputValidator(languageSchema)
  .handler(({ data: language }) => setLanguageCookie(language))
