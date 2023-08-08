import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AccountLayout, PageLayout } from '@/components/layout'

import { SubscriptionsView } from '@/components/views'

export const Subscriptions: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.sidebar.items.subscriptions')}>
      <AccountLayout>
        <SubscriptionsView />
      </AccountLayout>
    </PageLayout>
  )
}
