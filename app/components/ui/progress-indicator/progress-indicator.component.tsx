import { FC, useEffect, useRef } from 'react'
import cn from 'clsx'
import { useSlider } from '@/shared/hooks'
import { calculateProgress } from '@/shared/utils'
import { StateAction } from '@/shared/types'
import styles from './progress-indicator.module.scss'

interface IProgressIndicator {
  percent: number
  maxWidth: number
  setProgress?: StateAction<number>
  forceUpdateFlag?: boolean
}

export const ProgressIndicator: FC<IProgressIndicator> = ({
  percent,
  maxWidth,
  setProgress,
  forceUpdateFlag,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)

  const {
    mouseDownHandler,
    mouseUpHandler,
    draggerXPos,
    isDrag,
    progressPercent,
  } = useSlider({
    percent: calculateProgress(percent, maxWidth),
    maxWidth,
    refs: {
      wrap: wrapRef,
    },
    forceUpdateFlag,
  })

  useEffect(() => {
    if (!setProgress) return

    setProgress(progressPercent)
  }, [progressPercent, setProgress])

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
        {!forceUpdateFlag && (
          <div
            className={cn(styles.dragger, {
              [styles.draggerShow]: isDrag,
            })}
            style={{ left: `${draggerXPos - 7}px` }}
          />
        )}
      </div>
    </div>
  )
}
