import { cn } from '@/integrations/shadcn/lib/utils'
import { useInView } from '@/core/hooks/useInView'
import { TimelineCard } from '@/features/landing/components/TimelineCard'
import { TimelineCtaCard } from '@/features/landing/components/TimelineCtaCard'
import workHistoryData from '@/data/work-history.json'

export interface WorkHistoryEntry {
  company: string
  logo: string
  role: string
  startDate: string
  endDate: string
  achievements: Array<string>
  technologies: Array<string>
}

const WORK_HISTORY: Array<WorkHistoryEntry> = workHistoryData.map((entry) => ({
  company: entry.company,
  logo: entry.logo,
  role: entry.role,
  startDate: entry.startDate,
  endDate: entry.endDate,
  achievements: entry.achievements,
  technologies: entry.technologies,
}))

export function WorkHistorySection({ className, ...props }: React.ComponentProps<'section'>) {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section id="work" className={cn('py-16 md:py-32', className)} {...props}>
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-20">
        <div ref={headerRef} className="mx-auto max-w-xl space-y-4 text-center">
          <h2
            className={cn(
              'text-4xl font-medium text-balance lg:text-5xl',
              headerInView ? 'slide-up-blur-in' : 'opacity-0'
            )}
          >
            Work history
          </h2>
          <p
            className={cn(
              'text-muted-foreground text-balance delay-100',
              headerInView ? 'slide-up-blur-in' : 'opacity-0'
            )}
          >
            A track record of delivering impactful solutions across industries
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {WORK_HISTORY.map((entry, index) => (
            <TimelineCard
              key={`${entry.company}-${entry.role}`}
              entry={entry}
              index={index}
              totalEntries={WORK_HISTORY.length}
            />
          ))}
          <TimelineCtaCard />
        </div>
      </div>
    </section>
  )
}
