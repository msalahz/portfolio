import type { WorkHistoryEntry } from '@/features/landing/components/WorkHistorySection'
import { cn } from '@/integrations/shadcn/lib/utils'
import { Badge } from '@/integrations/shadcn/components/ui/badge'
import { RiseReveal } from '@/core/components/RiseReveal'

export function BentoCard({
  entry,
  index,
  featured,
}: {
  entry: WorkHistoryEntry
  index: number
  featured: boolean
}) {
  return (
    <RiseReveal asChild>
      <div
        className={cn(
          'group border-border bg-card relative overflow-hidden rounded-2xl border p-6 transition-all duration-300',
          'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/3',
          featured && 'md:col-span-2'
        )}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${entry.gradient.from}, ${entry.gradient.to})`,
            opacity: 0.08,
          }}
        />

        {/* Watermark logo */}
        <img
          src={entry.logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-4 -right-2 size-45 object-contain opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.1] sm:size-50 dark:opacity-[0.07] dark:invert dark:group-hover:opacity-[0.14]"
          loading="lazy"
        />

        <div className="relative flex h-full flex-col">
          {/* Header row: logo + company + date */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="text-muted-foreground text-base font-medium tracking-wide">
                {entry.company}
              </span>
            </div>
            <time className="text-muted-foreground/60 shrink-0 text-xs tabular-nums">
              {entry.startDate} &mdash; {entry.endDate}
            </time>
          </div>

          {/* Key metric */}
          <div className="mt-5">
            <span className="text-foreground text-3xl font-bold tracking-tight lg:text-4xl">
              {entry.keyMetric.value}
            </span>
            <p className="text-muted-foreground mt-0.5 text-sm">{entry.keyMetric.label}</p>
          </div>

          {/* Role */}
          <h3 className="text-foreground mt-4 text-base font-semibold tracking-tight">
            {entry.role}
          </h3>

          {/* Achievements - hover reveal (desktop), tap toggle (mobile) */}
          <div
            className={cn(
              'mt-3 overflow-hidden transition-all duration-300',
              'max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100',
              'md:block',
              'max-h-60 opacity-100!'
            )}
          >
            <ul className="space-y-1.5 pt-1">
              {entry.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="text-muted-foreground before:bg-foreground/20 relative pl-3.5 text-sm leading-relaxed before:absolute before:top-[0.55em] before:left-0 before:size-1 before:rounded-full before:content-['']"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech badges */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {entry.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-foreground/60 bg-background/80 dark:bg-background/20 border-foreground/8 rounded-md border px-2 py-0.5 text-[0.7rem] font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </RiseReveal>
  )
}
