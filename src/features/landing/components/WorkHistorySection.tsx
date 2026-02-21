import { cn } from '@/integrations/shadcn/lib/utils'
import { BentoGrid } from '@/features/landing/components/BentoGrid'
import { BentoCard } from '@/features/landing/components/BentoCard'
import { BentoCtaCard } from '@/features/landing/components/BentoCtaCard'
import { WorkHistoryHeader } from '@/features/landing/components/WorkHistoryHeader'

import workHistoryData from '@/data/work-history.json'

export interface WorkHistoryEntry {
  company: string
  logo: string
  role: string
  startDate: string
  endDate: string
  achievements: Array<string>
  technologies: Array<string>
  keyMetric: { value: string; label: string }
  gradient: { from: string; to: string }
}

const WORK_HISTORY: Array<WorkHistoryEntry> = workHistoryData.map((entry) => ({
  company: entry.company,
  logo: entry.logo,
  role: entry.role,
  startDate: entry.startDate,
  endDate: entry.endDate,
  achievements: entry.achievements,
  technologies: entry.technologies,
  keyMetric: entry.keyMetric,
  gradient: entry.gradient,
}))

const FEATURED_INDICES = new Set([1, 2])

export function WorkHistorySection({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section id="work" className={cn('py-16 md:py-32', className)} {...props}>
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-16">
        <WorkHistoryHeader />

        <BentoGrid>
          {WORK_HISTORY.map((entry, index) => (
            <BentoCard
              key={`${entry.company}-${entry.role}`}
              entry={entry}
              index={index}
              featured={FEATURED_INDICES.has(index)}
            />
          ))}
          <BentoCtaCard />
        </BentoGrid>
      </div>
    </section>
  )
}
