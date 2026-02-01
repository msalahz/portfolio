import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { ThemeToggle, ThemeToggleButton, ThemeToggleIcon } from './ThemeToggle'
import { ThemeProvider } from './ThemeProvider'

import type { ReactNode } from 'react'

vi.mock('@tanstack/react-start', () => {
  const mockFn = vi.fn()
  return {
    useServerFn: () => mockFn,
    createServerFn: () => ({
      inputValidator: () => ({
        handler: () => mockFn,
      }),
    }),
  }
})

vi.mock('@tanstack/react-query', () => ({
  useMutation: () => ({ mutate: vi.fn() }),
}))

function Wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider initialTheme="dark">{children}</ThemeProvider>
}

describe('ThemeToggleIcon', () => {
  it('renders MoonIcon for dark theme', () => {
    render(<ThemeToggleIcon theme="dark" />)
    expect(document.querySelector('#MoonIcon')).toBeInTheDocument()
  })

  it('renders SunIcon for light theme', () => {
    render(<ThemeToggleIcon theme="light" />)
    expect(document.querySelector('#SunIcon')).toBeInTheDocument()
  })
})

describe('ThemeToggleButton', () => {
  it('calls onChange with toggled theme on click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<ThemeToggleButton theme="dark" onChange={onChange} />)
    await user.click(screen.getByRole('button'))

    expect(onChange).toHaveBeenCalledWith('light')
  })

  it('toggles from light to dark', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<ThemeToggleButton theme="light" onChange={onChange} />)
    await user.click(screen.getByRole('button'))

    expect(onChange).toHaveBeenCalledWith('dark')
  })
})

describe('ThemeToggle', () => {
  it('renders a button', () => {
    render(<ThemeToggle />, { wrapper: Wrapper })
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
