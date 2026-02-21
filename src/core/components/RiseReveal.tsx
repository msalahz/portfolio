import { Slot } from 'radix-ui'
import type * as React from 'react'
import { cn } from '@/integrations/shadcn/lib/utils'
import { useInView } from '@/core/hooks/useInView'

export interface RiseRevealProps extends React.ComponentProps<'div'> {
  asChild?: boolean
}
export function RiseReveal({ className, asChild = false, ...props }: RiseRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  const Comp = asChild ? Slot.Root : 'div'
  return (
    <Comp
      data-slot="rise-reveal"
      ref={ref}
      className={cn(inView ? 'slide-up-blur-in' : 'opacity-0', className)}
      {...props}
    />
  )
}
