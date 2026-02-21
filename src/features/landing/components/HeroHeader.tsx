import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { ThemeToggle } from '@/core/theme/ThemeToggle'
import { Logo } from '@/features/landing/components/Logo'
import { Button } from '@/integrations/shadcn/components/ui/button'
import { LandingLinks } from '@/features/landing/components/LandingLinks'

export function HeroHeader() {
  const [menuState, setMenuState] = useState(false)
  function toggleMenu() {
    setMenuState(!menuState)
  }
  return (
    <header>
      <span className="scroll-progress-indicator" />
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full border-b border-dashed bg-white/75 backdrop-blur dark:bg-zinc-950/75"
      >
        <div className="m-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={toggleMenu}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:pr-4">
                <LandingLinks onItemClick={toggleMenu} />
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                <Button asChild variant="outline" size="sm" className="hidden">
                  <Link to="/">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild size="sm" className="hidden">
                  <Link to="/">
                    <span>Login</span>
                  </Link>
                </Button>
                <ThemeToggle onChange={toggleMenu} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
