import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

interface IImage {
  src: string
  alt: string
  width?: number
  height?: number
}

export const Image: FC<PropsWithClassName<IImage>> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      width={width}
      height={height}
      className={cn(className)}
    />
  )
}
