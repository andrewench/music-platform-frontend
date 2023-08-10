import { FC } from 'react'
import { IoEllipsisHorizontalOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { SectionBlock, Table, ViewLayout } from '@/components/layout'

import { BackLink, PrimaryButton, SecondaryButton } from '@/components/ui'

import { Flex, Image, PlaylistStat } from '@/components/shared'

import { SoundtracksList, SoundtracksListCaption } from '@/shared/data'

import styles from './single-playlist.module.scss'

export const SinglePlaylistView: FC = () => {
  return (
    <ViewLayout>
      <SectionBlock>
        <BackLink to="/playlists" label="Back to playlists" />

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
                <IoEllipsisHorizontalOutline size={18} />
              </SecondaryButton>
            </Flex>
          </div>
        </Flex>

        <Table
          head={SoundtracksListCaption}
          content={SoundtracksList}
          className={styles.table}
        />
      </SectionBlock>
    </ViewLayout>
  )
}
