import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/integrations/shadcn/lib/utils'

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
  duration?: string
  gap?: string
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  duration = '40s',
  gap = '5rem',
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn('marquee-container', vertical && 'marquee-vertical', className)}
      style={{ '--marquee-duration': duration, '--marquee-gap': gap } as React.CSSProperties}
    >
      <div
        className={cn(
          'marquee-content',
          reverse && 'marquee-reverse',
          pauseOnHover && 'marquee-pause-on-hover'
        )}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div key={i} className="marquee-items">
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
