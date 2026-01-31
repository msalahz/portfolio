import { Link } from '@tanstack/react-router'
import { Logo } from '@/features/landing/components/Logo'
import { LandingLinks } from '@/features/landing/components/LandingLinks'
import { SocialLinks } from '@/features/landing/components/SocialLinks'

export function FooterSection() {
  return (
    <footer className="bg-secondary/10 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link to="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <LandingLinks className="my-8 flex flex-wrap justify-center gap-6 text-sm" />

        <SocialLinks className="mx-auto my-8 flex flex-wrap justify-center gap-6 text-sm" />

        <span className="text-muted-foreground block text-center text-sm">
          {' '}
          © {new Date().getFullYear()} Mohammed Zaghloul, All rights reserved
        </span>
      </div>
    </footer>
  )
}
