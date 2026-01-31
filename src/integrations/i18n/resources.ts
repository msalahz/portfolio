import coreEn from '@/core/locales/en.json'
import coreAr from '@/core/locales/ar.json'

export const resources = {
  en: {
    core: coreEn,
  },
  ar: {
    core: coreAr,
  },
} as const

export const defaultNS = 'core'

export type Resources = typeof resources
export type Namespace = keyof typeof resources.en
export type SupportedLanguage = keyof typeof resources
