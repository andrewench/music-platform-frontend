import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionBlock, ViewLayout } from '@/components/layout'

import { PlaylistItem } from '@/components/ui'

import { Flex, SectionTitle } from '@/components/shared'

import styles from './playlists-view.module.scss'

export const PlaylistsView: FC = () => {
  const { t } = useTranslation()

  return (
    <ViewLayout>
      <SectionBlock>
        <SectionTitle>{t('sections.header.links.playlists')}</SectionTitle>

        <Flex isGrid className={styles.grid}>
          <PlaylistItem
            to="/"
            imageSrc="/images/instrumental.jpg"
            label="Instrumental music"
          />
          <PlaylistItem
            to="/"
            imageSrc="/images/creepy.jpg"
            label="Creepy stories"
          />
          <PlaylistItem
            to="/"
            imageSrc="/images/ambient.jpg"
            label="Ambient music"
          />
          <PlaylistItem
            to="/"
            imageSrc="/images/rap.jpg"
            label="Rap and Hip-Hop"
          />
          <PlaylistItem
            to="/"
            imageSrc="/images/electronic.jpg"
            label="Electronic music"
          />
        </Flex>
      </SectionBlock>
    </ViewLayout>
  )
}
