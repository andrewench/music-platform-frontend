import { ForwardedRef, forwardRef } from 'react'

import cn from 'clsx'

import { IFlex } from './flex.interface'

import styles from './flex.module.scss'

export const Flex = forwardRef(
  (
    {
      isCentered = false,
      direction = 'row',
      align,
      content,
      isGrid,
      isRtlDetect,
      className,
      children,
    }: IFlex,
    ref?: ForwardedRef<HTMLDivElement>
  ) => {
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
        ref={ref}
      >
        {children}
      </div>
    )
  }
)
