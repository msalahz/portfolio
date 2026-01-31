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
    <section id="about" className={cn('bg-secondary/10 py-16 md:py-32', className)} {...props}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-5 text-balance">
            <h2 className="text-4xl font-medium">Bring measurable impact to your business</h2>
            <div className="space-y-4">
              <p>
                Blending <span className="font-bold">business background</span> with 12+ years of{' '}
                <span className="font-bold">technical expertise</span> to create impactful web
                solutions.
              </p>
              <p>
                From MVPs to enterprise platforms, I focus on shipping quality software that drives
                real results.
              </p>
              {/* <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">*/}
              {/* <Link to="/about">*/}
              {/*   <span>Learn More</span>*/}
              {/*   <ChevronRight className="size-2" />*/}
              {/* </Link>*/}
              {/* </Button>*/}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 pt-6 sm:grid-cols-2 md:gap-4">
            {CORE_VALUES.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex items-center gap-2">
                  <item.icon className="size-4" aria-hidden="true" />
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
