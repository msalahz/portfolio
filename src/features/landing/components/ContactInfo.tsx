import { Calendar, Clock, Mail } from 'lucide-react'
import { cn } from '@/integrations/shadcn/lib/utils'
import { SocialLinks } from '@/features/landing/components/SocialLinks'

export function ContactInfo({ inView }: { inView: boolean }) {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col gap-4 delay-200',
        inView ? 'slide-up-blur-in' : 'opacity-0'
      )}
    >
      <a
        href="mailto:hello@devpluscoder.com"
        className="border-border hover:bg-muted/50 group flex flex-1 items-start gap-4 rounded-2xl border p-6 transition-colors duration-200"
      >
        <div className="bg-foreground/5 flex size-10 shrink-0 items-center justify-center rounded-lg">
          <Mail className="text-foreground size-5" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">Drop me an email</p>
          <p className="text-muted-foreground group-hover:text-foreground text-sm transition-colors">
            hello@devpluscoder.com
          </p>
          <div className="flex items-center gap-1.5 pt-1">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground text-xs">Usually responds within 24h</span>
          </div>
        </div>
      </a>

      <a
        href="https://calendly.com/mohammedzaghloul/1-1-consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="border-border hover:bg-muted/50 group flex flex-1 items-start gap-4 rounded-2xl border p-6 transition-colors duration-200"
      >
        <div className="bg-foreground/5 flex size-10 shrink-0 items-center justify-center rounded-lg">
          <Calendar className="text-foreground size-5" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">Book a 1:1 consultation</p>
          <p className="text-muted-foreground text-sm">
            30-min video call to discuss your project scope and goals
          </p>
          <div className="flex items-center gap-1.5 pt-1">
            <Clock className="text-muted-foreground size-3" />
            <span className="text-muted-foreground text-xs">Free, no commitment</span>
          </div>
        </div>
      </a>

      <div className="border-border flex flex-1 items-center justify-between rounded-2xl border p-6">
        <div className="space-y-3">
          <p className="text-sm font-medium">Let&apos;s connect</p>
          <SocialLinks className="animate-none delay-0" />
        </div>
        <div className="hidden text-right sm:block">
          <p className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-zinc-800">
            75+
          </p>
          <p className="text-muted-foreground text-xs">Happy clients</p>
        </div>
      </div>
    </div>
  )
}
