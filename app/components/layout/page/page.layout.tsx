import { FC, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import cn from 'clsx'

import { AppConstant } from '@/shared/constants'

import { TPageLayout } from './page.interface'

import styles from './page.module.scss'

export const PageLayout: FC<TPageLayout> = ({ title, children, className }) => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0]

    titleElement.innerText = `${AppConstant.APP_NAME} | ${title}`
  }, [title])

  return (
    <div className={cn(className)}>
      {children}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: AppConstant.TOAST.LIFE_TIME,
          className: styles.normal,
          success: {
            className: styles.success,
          },
          error: {
            className: styles.error,
          },
        }}
        reverseOrder
      />
    </div>
  )
}
