import { cn } from '@/integrations/shadcn/lib/utils'

function Stat({
  to,
  duration,
  prefix = '',
  postfix = '',
  label = '',
  enabled = false,
  ...props
}: React.ComponentProps<'div'> & {
  to: number
  prefix?: string
  postfix?: string
  label?: string
  duration?: number
  enabled?: boolean
}) {
  return (
    <div className={cn('space-y-4')} {...props}>
      <div className="flex items-center bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
        {prefix}
        {to}
        {postfix}
      </div>
      <p>{label}</p>
    </div>
  )
}

const CAREER_STATS: Array<React.ComponentProps<typeof Stat>> = [
  { to: 12, prefix: '+', duration: 2, label: 'Years of Experience' },
  { to: 100, prefix: '+', duration: 3, label: 'Projects Completed' },
  { to: 75, prefix: '+', duration: 3, label: 'Satisfied Clients' },
  { to: 45, prefix: '+', duration: 3, label: 'Skills & Technologies' },
]

const UPWORK_STATS: Array<React.ComponentProps<typeof Stat>> = [
  { to: 100, prefix: '+', postfix: '%', duration: 3, label: 'Job Success' },
  { to: 200, prefix: '+', postfix: 'K', duration: 3, label: 'Total Earnings' },
  { to: 5427, duration: 3, label: 'Worked Hours' },
  { to: 40, duration: 3, label: 'Jobs Completed' },
]

export function StatsSection({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section id="stats" className={cn('py-16 md:py-32', className)} {...props}>
      <div className="mx-auto max-w-6xl space-y-10 px-6 md:space-y-12">
        <div className="grid gap-6 divide-y lg:grid-cols-2 lg:gap-24 lg:divide-x lg:divide-y-0">
          <div>
            <h2 className="text-2xl font-medium lg:text-3xl">Career Stats</h2>
            <div className="mt-12 mb-12 grid grid-cols-2 gap-6 lg:mb-0">
              {CAREER_STATS.map((stat) => (
                <Stat
                  key={stat.label}
                  to={stat.to}
                  label={stat.label}
                  prefix={stat.prefix}
                  duration={stat.duration}
                />
              ))}
            </div>
          </div>

          <a
            href="https://upwork.com/freelancers/msalahz"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="View my Upwork profile and statistics"
            aria-label="View my Upwork profile and statistics"
          >
            <div>
              <h2 className="grid grid-cols-2 gap-6 text-2xl font-medium lg:text-3xl">
                <div className="space-x-2">
                  <img
                    src="/companies/upwork.svg"
                    alt="Upwork"
                    className="inline-block h-8 dark:invert"
                  />
                  <span>Stats</span>
                </div>

                <div className="flex items-center gap-1">
                  <img
                    src="/icons/upwork-top-rated-plus.svg"
                    alt="Upwork Top Rated Plus"
                    className="inline-block h-8"
                  />
                  <span className="text-2xl font-medium">Top Rated Plus</span>
                </div>
              </h2>
              <div className="mt-12 mb-12 grid grid-cols-2 gap-6 lg:mb-0">
                {UPWORK_STATS.map((stat) => (
                  <Stat
                    key={stat.label}
                    to={stat.to}
                    label={stat.label}
                    prefix={stat.prefix}
                    postfix={stat.postfix}
                    duration={stat.duration}
                  />
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
