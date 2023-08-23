import { FC, useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'

import { AnimatePresence } from 'framer-motion'

import { DropList } from '@/components/layout'

import {
  DropListItem,
  LanguageButton,
  LogoutButton,
  StyledButton,
  ThemeButton,
} from '@/components/ui'

import styles from './header-drop-list.module.scss'

export const HeaderDropList: FC = () => {
  const [isDropList, setDropList] = useState<boolean>(false)

  return (
    <div className={styles.menu}>
      <div
        onClick={() => {
          setDropList(!isDropList)
        }}
        role="presentation"
        className={styles.toggleWrap}
      >
        <StyledButton
          type="button"
          variant="outlined"
          className={styles.toggle}
        >
          <IoMenuOutline size={20} />
        </StyledButton>
      </div>

      <AnimatePresence>
        {isDropList && (
          <DropList position="right">
            <DropListItem render={<LanguageButton />} />
            <DropListItem render={<ThemeButton />} />
            <DropListItem render={<LogoutButton />} />
          </DropList>
        )}
      </AnimatePresence>
    </div>
  )
}
