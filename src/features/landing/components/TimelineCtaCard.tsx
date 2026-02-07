import { ArrowRight, Handshake } from 'lucide-react'
import { cn } from '@/integrations/shadcn/lib/utils'
import { useInView } from '@/core/hooks/useInView'
import { Button } from '@/integrations/shadcn/components/ui/button'

export function TimelineCtaCard() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
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
