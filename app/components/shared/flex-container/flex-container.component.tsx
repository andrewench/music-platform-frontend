import { FC } from 'react'

import cn from 'clsx'

import { IFlexContainer } from './flex-container.interface'

import styles from './flex-container.module.scss'

export const FlexContainer: FC<IFlexContainer> = ({
  isCentered = false,
  direction = 'row',
  align,
  content,
  isGrid,
  isRtlDetect,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        styles.box,
        {
          [styles.centered]: isCentered,
          [styles.alignStart]: align === 'start',
          [styles.alignEnd]: align === 'end',
          [styles.alignCenter]: align === 'center',
          [styles.contentStart]: content === 'start',
          [styles.contentEnd]: content === 'end',
          [styles.contentCenter]: content === 'center',
          [styles.contentBetween]: content === 'between',
          [styles.contentAround]: content === 'around',
          [styles.contentEvenly]: content === 'evenly',
          [styles.grid]: isGrid,
          [styles.column]: direction === 'column',
          [styles.mainReverseAxis]: isRtlDetect,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
