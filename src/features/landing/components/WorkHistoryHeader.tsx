import { cn } from '@/integrations/shadcn/lib/utils'
import { useInView } from '@/core/hooks/useInView'

const STATS = [
  { value: '12+', label: 'Years' },
  { value: '10+', label: 'Companies' },
  { value: '6+', label: 'Industries' },
]

export function WorkHistoryHeader() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <div ref={ref} className="mx-auto max-w-2xl space-y-6 text-center">
      <h2
        className={cn(
          'text-4xl font-semibold tracking-tight text-balance lg:text-5xl',
          inView ? 'slide-up-blur-in' : 'opacity-0'
        )}
      >
        Building What Matters
      </h2>
      <p
        className={cn(
          'text-muted-foreground text-lg text-balance',
          inView ? 'slide-up-blur-in' : 'opacity-0'
        )}
        style={{ animationDelay: '100ms' }}
      >
        A track record of delivering impactful solutions across industries
      </p>
      <div
        className={cn(
          'flex items-center justify-center gap-3',
          inView ? 'slide-up-blur-in' : 'opacity-0'
        )}
        style={{ animationDelay: '200ms' }}
      >
        {STATS.map((stat) => (
          <span
            key={stat.label}
            className="bg-muted text-foreground/80 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium"
          >
            <span className="font-semibold">{stat.value}</span>
            <span className="text-muted-foreground">{stat.label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
