import { useTranslation } from 'react-i18next'

export function WithTranslation() {
  const { t } = useTranslation('core')
  return (
    <div>
      <span>{t('Test')}</span>
    </div>
  )
}
