import { describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useTheme } from './useTheme'
import { ThemeProvider } from './ThemeProvider'

import type { ReactNode } from 'react'

const mockMutate = vi.fn()

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
  useMutation: () => ({ mutate: mockMutate }),
}))

function createWrapper(initialTheme: 'light' | 'dark') {
  return function Wrapper({ children }: { children: ReactNode }) {
    return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
  }
}

describe('useTheme', () => {
  it('returns current theme from context', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark'),
    })
    expect(result.current.theme).toBe('dark')
  })

  it('throws error when used outside ThemeProvider', () => {
    expect(() => {
      renderHook(() => useTheme())
    }).toThrow('useTheme must be used within a ThemeProvider')
  })

  it('setTheme updates store and calls mutation', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark'),
    })

    act(() => {
      result.current.setTheme('light')
    })

    expect(result.current.theme).toBe('light')
    expect(mockMutate).toHaveBeenCalledWith({ data: 'light' })
  })
})
