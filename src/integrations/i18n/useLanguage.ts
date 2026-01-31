import { useContext } from 'react'
import { useStore } from '@tanstack/react-store'
import { useServerFn } from '@tanstack/react-start'
import { useMutation } from '@tanstack/react-query'

import { useTranslation } from 'react-i18next'
import type { Language } from '@/core/schemas'

import { setLanguageCookieFn } from '@/backend/preferences/mutations'
import { LanguageContext } from '@/integrations/i18n/LanguageProvider'

export function useLanguage() {
  const { i18n } = useTranslation()
  const store = useContext(LanguageContext)

  if (!store || !i18n) {
    throw new Error('useLanguage must be used within an LanguageProvider')
  }

  const setLanguageCookie = useServerFn(setLanguageCookieFn)
  const { mutate } = useMutation({
    mutationKey: ['set-language-cookie'],
    mutationFn: setLanguageCookie,
  })

  const language = useStore(store, (state) => state.language)
  const setLanguage = (newLanguage: Language) => {
    mutate({ data: newLanguage })
    store.setState((state) => ({ ...state, language: newLanguage }))
    !i18n.changeLanguage(newLanguage)
  }

  return {
    language,
    setLanguage,
  }
}
