import * as React from 'react'
import { cn } from '@/integrations/shadcn/lib/utils'

export function Logo({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2 className={cn('text-center text-2xl font-bold', className)} {...props}>
      Dev Plus Coder
    </h2>
  )
}
