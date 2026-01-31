import { cn } from '@/integrations/shadcn/lib/utils'

export function HeroHeadshot() {
  return (
    <img
      className={cn(
        'mask-y-from-85% mask-y-to-95% mask-x-from-85% mask-x-to-95% mask-radial-from-50% mask-radial-to-55% mask-radial-at-center'
      )}
      src="/headshot.jpeg"
      alt="Mohammed Zaghloul Headshot"
      loading="lazy"
      width={1024}
      height={1024}
    />
  )
}
