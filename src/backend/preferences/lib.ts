import { getCookie, setCookie } from '@tanstack/react-start/server'

import type { Theme } from '@/core/schemas'
import { COOKIE_OPTIONS, THEME_COOKIE_NAME, THEME_DEFAULT, themeSchema } from '@/core/schemas'

export const parseThemeCookie = () => {
  const theme = getCookie(THEME_COOKIE_NAME)
  return themeSchema.safeParse(theme).data
}

export function setThemeCookie(theme: Theme) {
  setCookie(THEME_COOKIE_NAME, theme, COOKIE_OPTIONS)
}

export function getInitialPreferences() {
  const initialTheme = parseThemeCookie() ?? THEME_DEFAULT

  return {
    initialTheme,
  }
}
