import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { cn } from '@/integrations/shadcn/lib/utils'
import { Button } from '@/integrations/shadcn/components/ui/button'

export function NotFound({ className, ...props }: React.ComponentProps<'div'>) {
  const { t } = useTranslation()

  return (
    <div
      className={cn('my-auto flex flex-col items-center justify-center px-6', className)}
      {...props}
    >
      <div className="text-center">
        <h1 className="text-primary text-9xl font-bold">{t('notFound.title')}</h1>
        <p className="text-muted-foreground mt-4 text-2xl font-semibold">{t('notFound.heading')}</p>
        <p className="text-muted-foreground mt-2 text-lg">{t('notFound.description')}</p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">
            <span>{t('notFound.goHome')}</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
