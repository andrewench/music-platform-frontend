import { FC } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import styles from './back-link.module.scss'

interface IBackLink {
  to: string
  label: string
}

export const BackLink: FC<IBackLink> = ({ to, label }) => {
  return (
    <Link to={to} className={styles.link}>
      <IoArrowBackOutline size={20} />
      {label}
    </Link>
  )
}
