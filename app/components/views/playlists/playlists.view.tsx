import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionBlock, ViewLayout } from '@/components/layout'

import { SectionTitle } from '@/components/shared'

export const PlaylistsView: FC = () => {
  const { t } = useTranslation()

  return (
    <ViewLayout>
      <SectionBlock>
        <SectionTitle>{t('sections.header.links.playlists')}</SectionTitle>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle>{t('sections.header.links.playlists')}</SectionTitle>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle>{t('sections.header.links.playlists')}</SectionTitle>
      </SectionBlock>
    </ViewLayout>
  )
}
