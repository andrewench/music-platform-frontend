import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AccountLayout, PageLayout } from '@/components/layout'

import { MessengerView } from '@/components/views'

export const Messenger: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.sidebar.items.messenger')}>
      <AccountLayout>
        <MessengerView />
      </AccountLayout>
    </PageLayout>
  )
}
