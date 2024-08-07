import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ViewLayout } from '@/components/layout'

export const SubscriptionsView: FC = () => {
  const { t } = useTranslation()

  return <ViewLayout>{t('sections.sidebar.items.subscriptions')}</ViewLayout>
}
