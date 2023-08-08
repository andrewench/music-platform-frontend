import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AccountLayout, PageLayout } from '@/components/layout'

import { SettingsView } from '@/components/views'

export const Settings: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.sidebar.items.settings')}>
      <AccountLayout>
        <SettingsView />
      </AccountLayout>
    </PageLayout>
  )
}
