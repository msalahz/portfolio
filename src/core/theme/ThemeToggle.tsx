import { MoonIcon, SunIcon } from 'lucide-react'

import type { Theme } from '@/core/schemas'

import { noop } from '@/core/utils/noop'
import { Button } from '@/integrations/shadcn/components/ui/button'
import { useTheme } from '@/core/theme/useTheme'

export function ThemeToggleIcon({ theme }: { theme: Theme }) {
  return theme === 'dark' ? <MoonIcon id="MoonIcon" /> : <SunIcon id="SunIcon" />
}

export interface ThemeToggleButtonProps extends Omit<
  React.ComponentProps<typeof Button>,
  'onChange'
> {
  theme: Theme
  onChange?: (theme: Theme) => void
}

export function ThemeToggleButton({
  children,
  theme,
  onChange = noop,
  ...props
}: ThemeToggleButtonProps) {
  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onChange(theme === 'light' ? 'dark' : 'light')
      }}
      {...props}
    >
      <ThemeToggleIcon theme={theme} />
      {children}
    </Button>
  )
}

export interface ThemeToggleProps {
  onChange?: (theme: Theme) => void
}

export function ThemeToggle({ onChange = noop }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  function handleChange(newTheme: Theme) {
    setTheme(newTheme)
    onChange(newTheme)
  }

  return <ThemeToggleButton theme={theme} onChange={handleChange} />
}
