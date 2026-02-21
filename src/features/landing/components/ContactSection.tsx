import { useInView } from '@/core/hooks/useInView'
import { cn } from '@/integrations/shadcn/lib/utils'
import { ContactInfo } from '@/features/landing/components/ContactInfo'

export function ContactSection({ className, ...props }: React.ComponentProps<'section'>) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  const slideClassName = inView ? 'slide-up-blur-in' : 'opacity-0'

  return (
    <section
      id="contact"
      className={cn('dark:bg-background bg-muted/50 py-16 md:py-32', className)}
      {...props}
    >
      <div ref={ref} className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className={cn('text-4xl font-medium text-balance lg:text-5xl', slideClassName)}>
            Let&apos;s work together
          </h2>
          <p className={cn('text-muted-foreground delay-100', slideClassName)}>
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-stretch gap-6 lg:flex-row">
          <ContactInfo inView={inView} />
        </div>
      </div>
    </section>
  )
}
