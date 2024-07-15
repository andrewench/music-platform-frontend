import { FC, useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react'
import cn from 'clsx'
import { Fallback } from '@/components/layout'
import { app } from '@/store/slices'
import { Constants } from '@/shared/constants'
import { useAppSelector, useDebounce } from '@/shared/hooks'
import { PropsWithChildrenAndClassName } from '@/shared/types'
import styles from './view-layout.module.scss'

export const ViewLayout: FC<PropsWithChildrenAndClassName> = ({
  children,
  className,
}) => {
  const [isMounted, setMounted] = useState<boolean>(false)

  const { sideBar } = useAppSelector(app)

  const debouncedHandler = () => {
    if (!isMounted) setMounted(true)
  }

  const debounced = useDebounce(debouncedHandler, Constants.FAKE_LOADER_DELAY)

  useEffect(() => {
    debounced()
  }, [isMounted, debounced])

  return isMounted ? (
    <SimpleBar
      className={cn(styles.scrollBar, {
        [styles.minimizedScrollBar]: !sideBar.isOpen,
      })}
    >
      <div className={cn(styles.box, styles.content, className)}>
        {children}
      </div>
    </SimpleBar>
  ) : (
    <div className={cn(styles.box, className)}>
      <Fallback type="view" />
    </div>
  )
}
