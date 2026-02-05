import { cn } from '@/integrations/shadcn/lib/utils'

function Stat({
  num,
  prefix = '',
  postfix = '',
  label = '',
  enabled = false,
  ...props
}: React.ComponentProps<'div'> & {
  num: number
  prefix?: string
  postfix?: string
  label?: string
  enabled?: boolean
}) {
  return (
    <div className={cn('space-y-4')} {...props}>
      <div className="flex items-center bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
        {prefix}
        {num}
        {postfix}
      </div>
      <p>{label}</p>
    </div>
  )
}

const CAREER_STATS: Array<React.ComponentProps<typeof Stat>> = [
  { num: 12, prefix: '+', label: 'Years of Experience' },
  { num: 100, prefix: '+', label: 'Projects Completed' },
  { num: 75, prefix: '+', label: 'Satisfied Clients' },
  { num: 45, prefix: '+', label: 'Skills & Technologies' },
]

const UPWORK_STATS: Array<React.ComponentProps<typeof Stat>> = [
  { num: 100, prefix: '+', postfix: '%', label: 'Job Success' },
  { num: 5427, label: 'Worked Hours' },
  { num: 40, label: 'Jobs Completed' },
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
                <Stat key={stat.label} num={stat.num} label={stat.label} prefix={stat.prefix} />
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
                    loading="lazy"
                  />
                  <span>Stats</span>
                </div>
              </h2>
              <div className="mt-12 mb-12 grid grid-cols-2 gap-6 lg:mb-0">
                {UPWORK_STATS.map((stat) => (
                  <Stat
                    key={stat.label}
                    num={stat.num}
                    label={stat.label}
                    prefix={stat.prefix}
                    postfix={stat.postfix}
                  />
                ))}
                <div className={cn('space-y-4')}>
                  <div className="flex h-12 items-center gap-1">
                    <img
                      src="/icons/upwork-top-rated-plus.svg"
                      alt="Upwork Top Rated Plus"
                      className="inline-block h-9"
                      loading="lazy"
                    />
                    <span className="flex items-center bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-zinc-600">
                      Top Rated Plus
                    </span>
                  </div>
                  <p>Badges</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
