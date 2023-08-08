import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AccountLayout, PageLayout } from '@/components/layout'

import { LikedSongsView } from '@/components/views'

export const LikedSongs: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.sidebar.items.liked')}>
      <AccountLayout>
        <LikedSongsView />
      </AccountLayout>
    </PageLayout>
  )
}
