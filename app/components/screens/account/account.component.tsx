import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountLayout, PageLayout } from '@/components/layout'
import { AccountView } from '@/components/views'

export const Account: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.sidebar.items.account')}>
      <AccountLayout>
        <AccountView />
      </AccountLayout>
    </PageLayout>
  )
}
