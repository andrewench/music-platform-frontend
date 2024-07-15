import { FC, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import cn from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'
import { AvatarUploaderModal } from '@/components/layout'
import { modalsAtom } from '@/store'
import { Constants } from '@/shared/constants'
import { TPageLayout } from './page.interface'
import styles from './page.module.scss'

export const PageLayout: FC<TPageLayout> = ({ title, children, className }) => {
  const [modals] = useAtom(modalsAtom)

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0]

    titleElement.innerText = `${Constants.APP_NAME} | ${title}`
  }, [title])

  return (
    <div className={cn(className)}>
      {children}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: Constants.TOAST.LIFE_TIME,
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

      <AnimatePresence>
        {modals.avatar.open && <AvatarUploaderModal />}
      </AnimatePresence>
    </div>
  )
}
