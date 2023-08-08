import { FC } from 'react'

import { AccountLayout, PageLayout } from '@/components/layout'

import { PlaylistsView } from '@/components/views'

export const Playlists: FC = () => {
  return (
    <PageLayout title="Playlists">
      <AccountLayout>
        <PlaylistsView />
      </AccountLayout>
    </PageLayout>
  )
}
