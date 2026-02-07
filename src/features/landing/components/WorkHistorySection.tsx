import { ArrowRight, Handshake } from 'lucide-react'
import { cn } from '@/integrations/shadcn/lib/utils'
import { useInView } from '@/core/hooks/useInView'
import { Button } from '@/integrations/shadcn/components/ui/button'
import { Badge } from '@/integrations/shadcn/components/ui/badge'
import workHistoryData from '@/data/work-history.json'

interface WorkHistoryEntry {
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

function TimelineCard({ entry, index }: { entry: WorkHistoryEntry; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 })

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Timeline track — dots, not a straight line */}
      <div className="relative flex shrink-0 flex-col items-center">
        {/* Node dot */}
        <div
          className={cn(
            'relative z-10 flex size-4 items-center justify-center transition-all duration-700',
            inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          )}
        >
          <span className="bg-foreground absolute size-2.5 rounded-full" />
          <span className="border-foreground/25 absolute size-5 rounded-full border" />
        </div>

        {/* Dotted connector — a column of small circles */}
        {index < WORK_HISTORY.length - 1 && (
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

      {/* Card */}
      <div
        className={cn(
          'group relative mb-10 flex-1 overflow-hidden rounded-2xl border border-transparent p-6 transition-all duration-500 ease-out sm:p-8 md:mb-14',
          'bg-muted/40 hover:bg-muted/70',
          'hover:border-border hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/3 dark:hover:shadow-white/2',
          inView ? 'slide-up-blur-in' : 'opacity-0'
        )}
      >
        {/* Watermark logo — large, ghosted in the background */}
        <img
          src={entry.logo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-3 size-38 object-contain opacity-[0.04] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.08] sm:size-48 md:size-58 dark:opacity-[0.06] dark:invert dark:group-hover:opacity-[0.12]"
          loading="lazy"
        />

        {/* Content — layered above the watermark */}
        <div className="relative">
          {/* Top row: logo + company + date */}
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

          {/* Role */}
          <h3 className="mt-4 text-lg font-semibold tracking-tight md:text-xl">{entry.role}</h3>

          {/* Achievements */}
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

          {/* Technologies */}
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

function CtaCard() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Final timeline dot */}
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
      </div>

      {/* CTA card */}
      <a
        href="/#contact"
        className={cn(
          'group relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border-2 border-dashed border-zinc-300/80 p-6 transition-all duration-500 ease-out sm:p-8 dark:border-zinc-700/80',
          'hover:-translate-y-0.5 hover:border-zinc-500 hover:shadow-lg hover:shadow-black/3 dark:hover:border-zinc-400 dark:hover:shadow-white/2',
          inView ? 'slide-up-blur-in' : 'opacity-0'
        )}
      >
        <div>
          <div className="flex items-center justify-between">
            <Handshake className="text-muted-foreground size-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
            <span className="text-muted-foreground/60 text-[0.7rem] font-medium tracking-widest uppercase">
              Open slot
            </span>
          </div>

          <h3 className="mt-5 text-lg font-semibold tracking-tight md:text-xl">
            Your project next?
          </h3>
          <p className="text-muted-foreground mt-1 text-sm">Your future partner</p>
          <p className="text-muted-foreground mt-4 text-[0.9rem] leading-relaxed">
            I&apos;m looking for my next meaningful collaboration. If you&apos;re building something
            ambitious, let&apos;s talk about making it happen together.
          </p>
        </div>

        <div className="mt-6 border-t border-dashed border-zinc-300/80 pt-5 dark:border-zinc-700/80">
          <Button variant="default" size="sm" className="pointer-events-none w-full" tabIndex={-1}>
            Start a conversation
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </a>
    </div>
  )
}

export function WorkHistorySection({ className, ...props }: React.ComponentProps<'section'>) {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section id="work" className={cn('py-16 md:py-32', className)} {...props}>
      <div className="mx-auto max-w-6xl space-y-12 px-6 md:space-y-20">
        {/* Section header */}
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

        {/* Timeline */}
        <div className="mx-auto max-w-6xl">
          {WORK_HISTORY.map((entry, index) => (
            <TimelineCard key={`${entry.company}-${entry.role}`} entry={entry} index={index} />
          ))}
          <CtaCard />
        </div>
      </div>
    </section>
  )
}
