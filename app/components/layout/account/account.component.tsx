import { FC, PropsWithChildren } from 'react'

import { Footer, Header, SideBar } from '@/components/layout'

import { FlexContainer } from '@/components/shared'

import styles from './account.module.scss'

export const AccountLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FlexContainer direction="column">
      <FlexContainer className={styles.box}>
        <SideBar />

        <FlexContainer direction="column" className={styles.content}>
          <Header />

          {children}
        </FlexContainer>
      </FlexContainer>

      <Footer />
    </FlexContainer>
  )
}
