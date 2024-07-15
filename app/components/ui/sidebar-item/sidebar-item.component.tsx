import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { preferencesAtom } from '@/store'
import styles from './sidebar-item.module.scss'

interface ISideBarItem {
  to: string
  label: string
  icon: ReactNode
}

export const SideBarItem: FC<ISideBarItem> = ({ to, label, icon }) => {
  const [preferences] = useAtom(preferencesAtom)

  return (
    <li>
      <Link to={to} className={styles.link} draggable={false}>
        {icon}

        <p
          className={cn({
            'visually-hidden': !preferences.sideBar.open,
          })}
        >
          {label}
        </p>
      </Link>
    </li>
  )
}
