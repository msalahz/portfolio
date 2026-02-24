import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import type { InitOptions } from 'i18next'
import type { Language } from '@/core/schemas'
import type { Resources } from '@/integrations/i18n/resources'

import { envClient } from '@/env'
import { defaultNS, resources } from '@/integrations/i18n/resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: Resources['en']
    defaultNS: typeof defaultNS
  }
}

const i18nInitOptions: InitOptions = {
  resources,
  fallbackLng: 'en',
  defaultNS,
  supportedLngs: Object.keys(resources) as Array<Language>,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['navigator', 'htmlTag'],
    convertDetectedLanguage: (lang) => {
      // Convert detected language to 'ar' or 'en'
      return lang.startsWith('ar') ? 'ar' : lang.startsWith('en') ? 'en' : 'en'
    },
  },
  showSupportNotice: false,
  debug: envClient.VITE_ENABLE_I18N_DEBUG === 'true', // Shows warnings for conflicts in dev
}

void i18n.use(LanguageDetector).use(initReactI18next).init(i18nInitOptions)

export function getI18n() {
  return i18n
}
