import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IoAddOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { SectionBlock, ViewLayout } from '@/components/layout'

import { PlaylistItem, SecondaryButton } from '@/components/ui'

import { Flex, SectionTitle } from '@/components/shared'

import styles from './playlists-view.module.scss'

export const PlaylistsView: FC = () => {
  const { t } = useTranslation()

  return (
    <ViewLayout>
      <SectionBlock>
        <Flex align="center">
          <SectionTitle className={styles.title}>
            {t('sections.playlist.manage')}
          </SectionTitle>

          <SecondaryButton type="button" className={styles.createPlaylist}>
            <Flex align="center" className={styles.box}>
              <IoAddOutline size={21} />
              <Link to="/playlists?act=create">
                {t('sections.playlist.create.title')}
              </Link>
            </Flex>
          </SecondaryButton>
        </Flex>
      </SectionBlock>

      <SectionBlock>
        <SectionTitle>{t('sections.header.links.playlists')}</SectionTitle>

        <Flex isGrid className={styles.grid}>
          <PlaylistItem
            to="/playlists?id=303931"
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
