import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'clsx'
import styles from './header-link.module.scss'

interface IHeaderLink {
  to: string
  label: string
}

export const HeaderLink: FC<IHeaderLink> = ({ to, label }) => {
  const location = useLocation()

  return (
    <Link
      to={to}
      className={cn(styles.link, {
        [styles.active]: location.pathname === to,
      })}
      draggable={false}
    >
      {label}
    </Link>
  )
}
