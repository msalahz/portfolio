import { Cpu, Scaling, Sparkles, Zap } from 'lucide-react'
import { cn } from '@/integrations/shadcn/lib/utils'

const CORE_VALUES: Array<{ icon: React.ElementType; title: string; description: string }> = [
  {
    icon: Zap,
    title: 'Ownership & Delivery',
    description: 'End-to-end ownership, shipping on time, measurable outcomes',
  },
  {
    icon: Cpu,
    title: 'Quality & Reliability',
    description: 'Best practices, comprehensive testing, maintainable architecture',
  },
  {
    icon: Scaling,
    title: 'Scalability & Growth',
    description: 'Building solutions that grow with the business',
  },
  {
    icon: Sparkles,
    title: 'Innovation & Adaptability',
    description: 'Continuous learning, and adapting to industry changes',
  },
]

export function AboutSection({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section id="about" className={cn('py-16 md:py-32', className)} {...props}>
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <p className="text-4xl font-medium text-balance lg:text-5xl">
            Bring measurable impact to your business
          </p>

          <p>
            Blending <span className="font-bold">business background</span> with 12+ years of{' '}
            <span className="font-bold">technical expertise</span> to create impactful web
            solutions.
          </p>
        </div>

        <div className="overflow-hidden bg-cover">
          <img
            className="rounded-(--radius) grayscale"
            src="/images/business-meeting.webp"
            alt="team image"
            height="480"
            width="1152"
            loading="lazy"
          />
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          {CORE_VALUES.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <item.icon className="size-4" aria-hidden="true" />
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
