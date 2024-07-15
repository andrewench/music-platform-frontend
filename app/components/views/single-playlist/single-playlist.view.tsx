import { MoreHorizontal } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SectionBlock, Table, ViewLayout } from '@/components/layout'
import { BackLink, PrimaryButton, SecondaryButton } from '@/components/ui'
import { Flex, Image, PlaylistStat } from '@/components/shared'
import {
  SoundtracksList,
  SoundtracksListCaptionKeys,
} from './soundtracks-list.data'
import styles from './single-playlist.module.scss'

export const SinglePlaylistView: FC = () => {
  const { t } = useTranslation()

  const [translatedTableCaptionKeys, setTranslatedTableCaptionKeys] = useState<
    string[]
  >([])

  useEffect(() => {
    const list = SoundtracksListCaptionKeys.map(item => t(item))

    setTranslatedTableCaptionKeys(list)
  }, [t])

  return (
    <ViewLayout>
      <SectionBlock>
        <BackLink
          to="/playlists"
          label={`${t('common.back')} ${t(
            'sections.header.links.playlists'
          ).toLowerCase()}`}
        />

        <Flex className={styles.box}>
          <Image
            src="/images/instrumental.jpg"
            alt="Instrumental music"
            className={styles.cover}
          />

          <div>
            <h3 className={styles.heading}>Instrumental Music</h3>

            <p className={styles.description}>
              Instrumental music is simply music that doesn’t contain any words
              or vocals. Typically, instrumental music includes just the sound
              of one or more instruments being played.
            </p>

            <p className={styles.author}>
              Author:{' '}
              <Link to="/" className={styles.profileLink}>
                Jessie Carrillo
              </Link>
            </p>

            <PlaylistStat listeners={120} likes={11} className={styles.stat} />

            <Flex className={styles.actions}>
              <PrimaryButton type="button">Add to playlist</PrimaryButton>

              <SecondaryButton type="button">
                <MoreHorizontal size={20} strokeWidth={1.5} />
              </SecondaryButton>
            </Flex>
          </div>
        </Flex>

        <Table
          head={translatedTableCaptionKeys}
          content={SoundtracksList}
          className={styles.table}
        />
      </SectionBlock>
    </ViewLayout>
  )
}
