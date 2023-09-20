import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import cn from 'clsx'

import { useMultipleSelector } from '@/shared/hooks'

import styles from './sidebar-item.module.scss'

interface ISideBarItem {
  to: string
  label: string
  icon: ReactNode
}

export const SideBarItem: FC<ISideBarItem> = ({ to, label, icon }) => {
  const {
    app: { sideBar },
  } = useMultipleSelector()

  return (
    <li>
      <Link to={to} className={styles.link} draggable={false}>
        {icon}

        <p
          className={cn({
            'visually-hidden': !sideBar.isOpen,
          })}
        >
          {label}
        </p>
      </Link>
    </li>
  )
}
