import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import styles from './drop-list.module.scss'

interface IDropList {
  position?: 'left' | 'right'
}

export const DropList: FC<PropsWithChildren<IDropList>> = ({
  position = 'left',
  children,
}) => {
  return (
    <motion.ul
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0 }}
      exit={{ translateY: 50, opacity: 0 }}
      className={cn(styles.box, {
        [styles.left]: position === 'left',
        [styles.right]: position === 'right',
      })}
    >
      {children}
    </motion.ul>
  )
}
