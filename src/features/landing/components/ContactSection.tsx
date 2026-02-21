import { cn } from '@/integrations/shadcn/lib/utils'
import { RiseReveal } from '@/core/components/RiseReveal'
import { ContactInfo } from '@/features/landing/components/ContactInfo'

export function ContactSection({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      id="contact"
      className={cn('dark:bg-background bg-muted/50 py-16 md:py-32', className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <RiseReveal asChild>
            <h2 className={cn('text-4xl font-medium text-balance lg:text-5xl')}>
              Let&apos;s work together
            </h2>
          </RiseReveal>

          <RiseReveal asChild>
            <p className={cn('text-muted-foreground delay-100')}>
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </RiseReveal>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-stretch gap-6 lg:flex-row">
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
