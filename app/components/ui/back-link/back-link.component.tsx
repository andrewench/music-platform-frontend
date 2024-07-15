import { ArrowLeft } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './back-link.module.scss'

interface IBackLink {
  to: string
  label: string
}

export const BackLink: FC<IBackLink> = ({ to, label }) => {
  return (
    <Link to={to} className={styles.link}>
      <ArrowLeft size={20} strokeWidth={1.5} />
      {label}
    </Link>
  )
}
