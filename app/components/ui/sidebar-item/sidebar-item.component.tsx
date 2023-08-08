import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import styles from './sidebar-item.module.scss'

interface ISideBarItem {
  to: string
  label: string
  icon: ReactNode
}

export const SideBarItem: FC<ISideBarItem> = ({ to, label, icon }) => {
  return (
    <li>
      <Link to={to} className={styles.link} draggable={false}>
        {icon}

        {label}
      </Link>
    </li>
  )
}
