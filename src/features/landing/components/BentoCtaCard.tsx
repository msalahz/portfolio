import { ArrowRight, Handshake } from 'lucide-react'
import { cn } from '@/integrations/shadcn/lib/utils'
import { useInView } from '@/core/hooks/useInView'
import { Button } from '@/integrations/shadcn/components/ui/button'

export function BentoCtaCard() {
  const { ref, inView } = useInView<HTMLAnchorElement>({ threshold: 0.2 })

  return (
    <a
      ref={ref}
      href="mailto:hello@devpluscoder.com"
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-dashed p-6 transition-all duration-300 sm:p-8 md:col-span-2 lg:col-span-3',
        'border-border/60 bg-muted/30',
        'hover:border-foreground/20 hover:bg-muted/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/3 dark:hover:shadow-white/2',
        inView ? 'slide-up-blur-in' : 'opacity-0'
      )}
      style={{ animationDelay: '700ms' }}
    >
      <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <div className="bg-muted flex size-12 shrink-0 items-center justify-center rounded-xl">
          <Handshake className="text-muted-foreground size-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
        </div>

        <div className="flex-1">
          <h3 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
            Your project next?
          </h3>
          <p className="text-muted-foreground mt-1 max-w-lg text-sm leading-relaxed">
            I&apos;m looking for my next meaningful collaboration. If you&apos;re building something
            ambitious, let&apos;s talk about making it happen together.
          </p>
        </div>

        <Button variant="default" size="sm" className="shrink-0" tabIndex={-1}>
          Start a conversation
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </a>
  )
}
