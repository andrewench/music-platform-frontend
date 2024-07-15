import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './error-helper.module.scss'

export const ErrorHelper: FC<{ message: string | undefined }> = ({
  message,
}) => {
  const { t } = useTranslation()

  if (!message) return null

  return <p className={styles.label}>{t(message)}</p>
}
