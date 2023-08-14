import { FC, useRef } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { Heading } from '@/components/shared'

import { useActions, useOutside } from '@/shared/hooks'

import { PropsWithChildrenAndClassName } from '@/shared/types'

import styles from './modal-window.module.scss'

interface IModalWindow {
  title: string
}

export const ModalWindow: FC<PropsWithChildrenAndClassName<IModalWindow>> = ({
  title,
  className,
  children,
}) => {
  const wrapModalRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const { closeModalWindow } = useActions()

  useOutside(wrapModalRef, modalRef, () => {
    closeModalWindow('avatarUploader')
  })

  return (
    <motion.div
      ref={wrapModalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0 }}
      exit={{ opacity: 0 }}
      className={styles.box}
    >
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        exit={{
          translateY: -100,
          opacity: 0,
        }}
        ref={modalRef}
        className={cn(styles.window, className)}
      >
        <Heading as="h1" label={title} className={styles.heading} />

        {children}
      </motion.div>
    </motion.div>
  )
}
