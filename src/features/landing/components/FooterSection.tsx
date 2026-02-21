import { Link } from '@tanstack/react-router'
import { Cloud, ExternalLink } from 'lucide-react'
import { Logo } from '@/features/landing/components/Logo'
import { LandingLinks } from '@/features/landing/components/LandingLinks'
import { GitHubIcon, SocialLinks } from '@/features/landing/components/SocialLinks'

export function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link to="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <LandingLinks className="my-8 flex flex-wrap justify-center gap-6 text-sm" />

        <SocialLinks className="mx-auto my-8 flex flex-wrap justify-center gap-6 text-sm" />

        <div className="border-border border-t pt-8">
          {/* Built with row */}
          <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:gap-0">
            <p className="text-muted-foreground text-sm">
              Built with <span aria-label="love">❤️</span> by Mohammed Zaghloul
            </p>

            <span className="text-border hidden sm:block">·</span>

            <div className="flex items-center gap-2">
              <a
                href="https://www.cloudflare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground border-border bg-muted/40 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400"
              >
                <Cloud className="size-3" strokeWidth={1.5} />
                Cloudflare
                <ExternalLink className="size-2.5 opacity-50" strokeWidth={1.5} />
              </a>

              <a
                href="https://github.com/msalahz/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground border-border bg-muted/40 hover:border-foreground/30 hover:bg-foreground/10 hover:text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200"
              >
                <GitHubIcon className="size-3" />
                View Source
                <ExternalLink className="size-2.5 opacity-50" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <span className="text-muted-foreground block text-center text-sm">
          {' '}
          © {new Date().getFullYear()} Mohammed Zaghloul, All rights reserved
        </span>
      </div>
    </footer>
  )
}
