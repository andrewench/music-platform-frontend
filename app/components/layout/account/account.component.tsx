import { FC, PropsWithChildren } from 'react'

import { Footer, Header, SideBar } from '@/components/layout'

import { Flex } from '@/components/shared'

import styles from './account.module.scss'

export const AccountLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex direction="column">
      <Flex className={styles.box}>
        <SideBar />

        <Flex direction="column" className={styles.content}>
          <Header />

          {children}
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}
