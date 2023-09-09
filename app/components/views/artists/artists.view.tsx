import { FC } from 'react'
import { IoCheckmarkDoneOutline, IoRadioOutline } from 'react-icons/io5'

import { ViewLayout } from '@/components/layout'

import { PrimaryButton, SoundtrackWithCover } from '@/components/ui'

import { Flex, SectionTitle } from '@/components/shared'

import styles from './artists-view.module.scss'

export const ArtistsView: FC = () => {
  return (
    <ViewLayout className={styles.box}>
      <div className={styles.banner} />

      <Flex className={styles.face}>
        <div className={styles.avatar} />

        <Flex align="start" content="between" className={styles.meta}>
          <div>
            <Flex align="center" className={styles.usernameBox}>
              <p className={styles.username}>Edward Johnson</p>

              <span className={styles.verify}>
                <IoCheckmarkDoneOutline size={20} />
              </span>
            </Flex>

            <p className={styles.followers}>1031k monthly listeners</p>
          </div>

          <PrimaryButton type="button" className={styles.follow}>
            <IoRadioOutline size={18} />
            Follow artist
          </PrimaryButton>
        </Flex>
      </Flex>

      <div className={styles.content}>
        <SectionTitle>Popular soundtracks</SectionTitle>

        <Flex isGrid className={styles.discography}>
          <SoundtrackWithCover
            src="/images/creepy.jpg"
            alt="Playlist"
            name="Hate You"
          />
          <SoundtrackWithCover
            src="/images/creepy.jpg"
            alt="Playlist"
            name="Don't Be Shy"
          />
          <SoundtrackWithCover
            src="/images/creepy.jpg"
            alt="Playlist"
            name="Drunk & Sober"
          />
          <SoundtrackWithCover
            src="/images/creepy.jpg"
            alt="Playlist"
            name="Listen To Your Heart"
          />
          <SoundtrackWithCover
            src="/images/creepy.jpg"
            alt="Playlist"
            name="Victory"
          />
        </Flex>
      </div>
    </ViewLayout>
  )
}
