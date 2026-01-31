import { Store } from '@tanstack/react-store'
import { I18nextProvider } from 'react-i18next'
import { createContext, useState } from 'react'

import type { Language } from '@/core/schemas'

export interface LanguageStoreState {
  language: Language
}

export const LanguageContext = createContext<Store<LanguageStoreState> | null>(null)

export interface LanguageProviderProps extends React.ComponentProps<typeof I18nextProvider> {
  initialLanguage: Language
  children: React.ReactNode
}

export function LanguageProvider({ initialLanguage, i18n, ...props }: LanguageProviderProps) {
  if (i18n.language !== initialLanguage) {
    void i18n.changeLanguage(initialLanguage)
  }

  const [store] = useState(() => new Store<LanguageStoreState>({ language: initialLanguage }))

  return (
    <LanguageContext.Provider value={store}>
      <I18nextProvider i18n={i18n} {...props} />
    </LanguageContext.Provider>
  )
}
