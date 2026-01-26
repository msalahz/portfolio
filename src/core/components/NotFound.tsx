import { Link } from '@tanstack/react-router'
import { cn } from '@/integrations/shadcn/lib/utils'
import { Button } from '@/integrations/shadcn/components/ui/button'

export function NotFound({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('my-auto flex flex-col items-center justify-center px-6', className)}
      {...props}
    >
      <div className="text-center">
        <h1 className="text-primary text-9xl font-bold">404</h1>
        <p className="text-muted-foreground mt-4 text-2xl font-semibold">Page Not Found</p>
        <p className="text-muted-foreground mt-2 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">
            <span>Go Home</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
