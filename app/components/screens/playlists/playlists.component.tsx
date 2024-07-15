import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { AccountLayout, PageLayout } from '@/components/layout'
import {
  CreatePlaylistView,
  PlaylistsView,
  SinglePlaylistView,
} from '@/components/views'

const RenderedPlaylistView: FC = () => {
  const [searchParams] = useSearchParams()

  const actQuery = searchParams.get('act')
  const idQuery = searchParams.get('id')

  if (actQuery) {
    if (actQuery === 'create') {
      return <CreatePlaylistView />
    }
  }

  if (idQuery) {
    return <SinglePlaylistView />
  }

  return <PlaylistsView />
}

export const Playlists: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.header.links.playlists')}>
      <AccountLayout>
        <RenderedPlaylistView />
      </AccountLayout>
    </PageLayout>
  )
}
