import { useContext } from 'react'
import { describe, expect, it } from 'vitest'
import { useStore } from '@tanstack/react-store'
import { render, screen } from '@testing-library/react'
import { ThemeContext, ThemeProvider } from './ThemeProvider'

function ThemeDisplay() {
  const store = useContext(ThemeContext)
  if (!store) return <span>no context</span>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useStore(store, (s) => s.theme)
  return <span data-testid="theme">{theme}</span>
}

describe('ThemeProvider', () => {
  it('provides theme context to children', () => {
    render(
      <ThemeProvider initialTheme="dark">
        <ThemeDisplay />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })

  it('initializes with light theme', () => {
    render(
      <ThemeProvider initialTheme="light">
        <ThemeDisplay />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })

  it('returns null context outside provider', () => {
    render(<ThemeDisplay />)
    expect(screen.getByText('no context')).toBeInTheDocument()
  })
})
