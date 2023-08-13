import { FC, useRef } from 'react'

import cn from 'clsx'

import { Flex, Heading } from '@/components/shared'

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
    <Flex
      align="center"
      content="center"
      ref={wrapModalRef}
      className={styles.box}
    >
      <div ref={modalRef} className={cn(styles.window, className)}>
        <Heading as="h1" label={title} className={styles.heading} />

        {children}
      </div>
    </Flex>
  )
}
