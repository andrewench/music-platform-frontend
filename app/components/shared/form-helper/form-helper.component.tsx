import { Link } from 'react-router-dom'
import styles from './form-helper.module.scss'

interface IFormHelper<TLink extends string> {
  label: string
  link: {
    href: TLink
    label: string
  }
}

export const FormHelper = <TLink extends string>({
  label,
  link,
}: IFormHelper<TLink>) => {
  return (
    <p className={styles.text}>
      <span>{label}</span>
      <Link to={link.href} className={styles.link}>
        {link.label}
      </Link>
    </p>
  )
}
