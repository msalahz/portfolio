import { cn } from '@/integrations/shadcn/lib/utils'
import { RiseReveal } from '@/core/components/RiseReveal'

const STATS = [
  { value: '12+', label: 'Years' },
  { value: '10+', label: 'Companies' },
  { value: '6+', label: 'Industries' },
]

export function WorkHistoryHeader() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-center">
      <RiseReveal asChild>
        <h2 className={cn('text-4xl font-semibold tracking-tight text-balance lg:text-5xl')}>
          Building What Matters
        </h2>
      </RiseReveal>
      <RiseReveal asChild>
        <p
          className={cn('text-muted-foreground text-lg text-balance')}
          style={{ animationDelay: '100ms' }}
        >
          A track record of delivering impactful solutions across industries
        </p>
      </RiseReveal>
      <RiseReveal asChild>
        <div
          className={cn('flex items-center justify-center gap-3')}
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
      </RiseReveal>
    </div>
  )
}
