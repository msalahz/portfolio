import { Link } from '@tanstack/react-router'
import { cn } from '@/integrations/shadcn/lib/utils'

const links = [
  { name: 'About', href: '/#about' },
  { name: 'Stats', href: '/#stats' },
  { name: 'Contact', href: 'mailto:hello@devpluscoder.com' },
]

export function LandingLinks({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul className={cn('text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm', className)} {...props}>
      {links.map((item) => (
        <li key={item.href}>
          <Link
            key={item.name}
            to={item.href}
            rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={item.name}
            className="text-muted-foreground hover:text-accent-foreground block duration-150"
          >
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
