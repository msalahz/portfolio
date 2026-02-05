import * as React from 'react'
import { useInView } from '@/core/hooks/useInView'
import { cn } from '@/integrations/shadcn/lib/utils'

export interface AnimatedNumProps extends React.ComponentProps<'span'> {
  value: number
  whileInView?: boolean
  options?: IntersectionObserverInit
}
export function AnimatedNum({
  className,
  value,
  options,
  whileInView = false,
  ...props
}: AnimatedNumProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(options ?? { threshold: 0.5 })

  return (
    <span
      ref={ref}
      className={cn('animated-num', (!whileInView || inView) && 'in-view', className)}
      style={{ '--target': value } as React.CSSProperties}
      {...props}
    />
  )
}
