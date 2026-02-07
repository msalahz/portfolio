import { Marquee } from '@/core/components/Marquee'
import { cn } from '@/integrations/shadcn/lib/utils'

const HERO_COMPANIES: Array<React.ComponentProps<'img'> & { height: string }> = [
  { src: '/companies/genesys.svg', alt: 'Genesys Logo', height: cn('h-5') },
  { src: '/companies/plenty.svg', alt: 'Plenty Logo', height: cn('h-5') },
  { src: '/companies/leadliaison.svg', alt: 'Leadliaison Logo', height: cn('h-6') },
  { src: '/companies/bloowatch.svg', alt: 'Bloowatch Logo', height: cn('h-5') },
  {
    src: '/companies/ark-knowledge-networks.svg',
    alt: 'ARK Knowledge Network Logo',
    height: cn('h-5'),
  },
  { src: '/companies/diwala.svg', alt: 'Diwala Logo', height: cn('h-5') },
]

export function HeroCompanies({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn('dark:bg-background bg-muted/50 relative z-10 py-18', className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-lg font-medium">Helping the best teams</h2>
        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <Marquee pauseOnHover className="p-0 [--duration:20s]">
            {HERO_COMPANIES.map((company) => (
              <img
                key={company.src}
                className="h-7 w-fit dark:invert"
                height="30"
                width="auto"
                loading="lazy"
                src={company.src}
                alt={company.alt}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
