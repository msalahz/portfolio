import type { WorkHistoryEntry } from '@/features/landing/components/WorkHistorySection'
import { cn } from '@/integrations/shadcn/lib/utils'
import { useInView } from '@/core/hooks/useInView'
import { Badge } from '@/integrations/shadcn/components/ui/badge'

export function TimelineCard({
  entry,
  index,
  totalEntries,
}: {
  entry: WorkHistoryEntry
  index: number
  totalEntries: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 })

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      <div className="relative flex shrink-0 flex-col items-center">
        <div
          className={cn(
            'relative z-10 flex size-4 items-center justify-center transition-all duration-700',
            inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          )}
        >
          <span className="bg-foreground absolute size-2.5 rounded-full" />
          <span className="border-foreground/25 absolute size-5 rounded-full border" />
        </div>

        {index < totalEntries - 1 && (
          <div
            className={cn(
              'mt-2 flex flex-1 flex-col items-center gap-1.5 transition-opacity duration-1000',
              inView ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="bg-foreground/15 size-0.75 rounded-full" />
            ))}
          </div>
        )}
      </div>

      <div
        className={cn(
          'group relative mb-10 flex-1 overflow-hidden rounded-2xl border border-transparent p-6 transition-all duration-500 ease-out sm:p-8 md:mb-14',
          'bg-muted/40 hover:bg-muted/70',
          'hover:border-border hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/3 dark:hover:shadow-white/2',
          inView ? 'slide-up-blur-in' : 'opacity-0'
        )}
      >
        <img
          src={entry.logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-3 size-38 object-contain opacity-[0.04] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.08] sm:size-48 md:size-58 dark:opacity-[0.06] dark:invert dark:group-hover:opacity-[0.12]"
          loading="lazy"
        />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground text-lg font-medium tracking-wide">
                {entry.company}
              </span>
            </div>
            <time className="text-muted-foreground/70 shrink-0 text-xs tracking-tight tabular-nums">
              {entry.startDate} &mdash; {entry.endDate}
            </time>
          </div>

          <h3 className="mt-4 text-lg font-semibold tracking-tight md:text-xl">{entry.role}</h3>

          <ul className="mt-5 space-y-2">
            {entry.achievements.map((achievement) => (
              <li
                key={achievement}
                className="text-muted-foreground before:bg-foreground/20 relative pl-4 text-base leading-relaxed before:absolute before:top-[0.55em] before:left-0 before:size-1.5 before:rounded-full before:content-['']"
              >
                {achievement}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {entry.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-foreground/60 bg-background dark:bg-background/20 border-foreground/10 rounded-md border px-2.5 py-1 text-[0.75rem] font-medium tracking-wide"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
