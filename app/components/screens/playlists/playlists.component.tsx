import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { AccountLayout, PageLayout } from '@/components/layout'

import { PlaylistsView, SinglePlaylistView } from '@/components/views'

export const Playlists: FC = () => {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams()

  return (
    <PageLayout title={t('sections.header.links.playlists')}>
      <AccountLayout>
        {searchParams.get('id') ? <SinglePlaylistView /> : <PlaylistsView />}
      </AccountLayout>
    </PageLayout>
  )
}
