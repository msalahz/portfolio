import { Button } from '@/integrations/shadcn/components/ui/button'
import { HeroHeader } from '@/features/landing/components/HeroHeader'
import { TopEndLight } from '@/features/landing/components/TopEndLight'
import { SocialLinks } from '@/features/landing/components/SocialLinks'
import { HeroHeadshot } from '@/features/landing/components/HeroHeadshot'
import { HeroCompanies } from '@/features/landing/components/HeroCompanies'

export function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-x-hidden">
        <TopEndLight />

        <section className="relative z-10 pt-16.5">
          <div className="pt-12 pb-20 sm:pt-0 md:pb-20 lg:pt-44 lg:pb-45">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <p className="slide-up-blur-in text-muted-foreground mt-8 text-sm font-medium tracking-widest uppercase lg:mt-16">
                  Hello, I'm
                </p>

                <h1 className="slide-up-blur-in max-w-4xl text-5xl font-medium delay-100 md:text-6xl xl:text-7xl">
                  Mohammed Zaghloul
                </h1>
                <p className="slide-up-blur-in text-primary mt-4 text-lg font-medium delay-150 lg:text-xl">
                  Independent Software Developer & Consultant
                </p>
                <p className="slide-up-blur-in mt-8 max-w-2xl text-lg text-pretty delay-200">
                  I build end-to-end web solutions that deliver measurable business impact—from MVPs
                  to enterprise platforms.
                </p>

                <div className="slide-up-blur-in mt-12 flex flex-col items-center justify-center gap-5 delay-250 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <a href="mailto:hello@devpluscoder.com" rel="noopener noreferrer nofollow">
                      <span>Let's work together</span>
                    </a>
                  </Button>
                  <SocialLinks className="px-5" />
                </div>
              </div>
              <div className="slide-up-blur-in -z-10 order-first ml-auto w-full object-cover delay-50 lg:absolute lg:inset-0 lg:-top-65 lg:-right-20 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0">
                <HeroHeadshot />
              </div>
            </div>
          </div>
        </section>

        <HeroCompanies />
      </main>
    </>
  )
}
