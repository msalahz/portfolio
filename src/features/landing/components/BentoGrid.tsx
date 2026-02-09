import { cn } from '@/integrations/shadcn/lib/utils'

export function BentoGrid({ className, children }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6',
        className
      )}
    >
      {children}
    </div>
  )
}
