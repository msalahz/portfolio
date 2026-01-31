import { Store } from '@tanstack/react-store'
import { createContext, useState } from 'react'

import type { Theme } from '@/core/schemas'

export interface ThemeStoreState {
  theme: Theme
}

export const ThemeContext = createContext<Store<ThemeStoreState> | null>(null)

export interface ThemeProviderProps {
  initialTheme: Theme
  children: React.ReactNode
}

export function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [store] = useState(() => new Store<ThemeStoreState>({ theme: initialTheme }))

  return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
}
