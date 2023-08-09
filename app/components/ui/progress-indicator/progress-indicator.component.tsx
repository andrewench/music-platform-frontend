import { FC, useCallback, useEffect, useRef } from 'react'

import styles from './progress-indicator.module.scss'

interface IProgressIndicator {
  percent: number
  maxWidth: number
}

export const ProgressIndicator: FC<IProgressIndicator> = ({
  percent,
  maxWidth,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)

  const calculateProgress = useCallback(
    (percent: number) => {
      return (maxWidth * percent) / 100
    },
    [maxWidth]
  )

  useEffect(() => {
    if (!dragRef.current || !wrapRef.current) return

    wrapRef.current.style.width = `${maxWidth}px`
    dragRef.current.style.width = `${calculateProgress(percent)}px`
  })

  return (
    <div className={styles.box} ref={wrapRef}>
      <div className={styles.track} />
      <div className={styles.drag} ref={dragRef} />
    </div>
  )
}
