import { Link } from '@tanstack/react-router'
import { cn } from '@/integrations/shadcn/lib/utils'
import { noop } from '@/core/utils/noop'

const links = [
  { name: 'About', href: '/#about' },
  { name: 'Stats', href: '/#stats' },
  { name: 'Work', href: '/#work' },
  { name: 'Contact', href: '/#contact' },
]

export interface LandingLinksProps extends React.ComponentProps<'ul'> {
  onItemClick?: () => void
}

export function LandingLinks({ className, onItemClick = noop, ...props }: LandingLinksProps) {
  return (
    <ul
      className={cn('space-y-2 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm', className)}
      {...props}
    >
      {links.map((item) => (
        <li key={item.href}>
          <Link
            key={item.name}
            to={item.href}
            aria-label={item.name}
            onClick={onItemClick}
            className="text-muted-foreground hover:text-accent-foreground block duration-150"
          >
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
