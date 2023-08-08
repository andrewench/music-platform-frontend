import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AccountLayout, PageLayout } from '@/components/layout'

import { PlaylistsView } from '@/components/views'

export const Playlists: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.header.links.playlists')}>
      <AccountLayout>
        <PlaylistsView />
      </AccountLayout>
    </PageLayout>
  )
}
