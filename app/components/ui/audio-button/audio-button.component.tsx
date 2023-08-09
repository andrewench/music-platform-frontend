import { FC, ReactNode } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

interface IAudioButton {
  icon: ReactNode
  onClick?: () => void
}

export const AudioButton: FC<PropsWithClassName<IAudioButton>> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <button type="button" onClick={onClick} className={cn(className)}>
      {icon}
    </button>
  )
}
