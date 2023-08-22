import { FC, useCallback, useEffect, useRef } from 'react'

import cn from 'clsx'

import { useSlider } from '@/shared/hooks'

import styles from './progress-indicator.module.scss'

interface IProgressIndicator {
  percent: number
  maxWidth: number
}

export const ProgressIndicator: FC<IProgressIndicator> = ({
  percent,
  maxWidth,
}) => {
  const calculateProgress = useCallback(
    (percent: number) => (maxWidth * percent) / 100,
    [maxWidth]
  )

  const wrapRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)

  const { mouseDownHandler, mouseUpHandler, draggerXPos, isDrag } = useSlider({
    percent: calculateProgress(percent),
    refs: {
      wrap: wrapRef,
    },
  })

  useEffect(() => {
    if (!dragRef.current || !wrapRef.current) return

    wrapRef.current.style.width = `${maxWidth}px`
    dragRef.current.style.width = `${draggerXPos}px`
  })

  return (
    <div
      className={styles.box}
      ref={wrapRef}
      role="presentation"
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
    >
      <div className={styles.track} />
      <div className={styles.drag} ref={dragRef}>
        <div
          className={cn(styles.dragger, {
            [styles.draggerShow]: isDrag,
          })}
          style={{ left: `${draggerXPos - 7}px` }}
        />
      </div>
    </div>
  )
}
