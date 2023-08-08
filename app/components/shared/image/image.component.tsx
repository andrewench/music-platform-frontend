import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

interface IImage {
  src: string
  alt: string
}

export const Image: FC<PropsWithClassName<IImage>> = ({
  src,
  alt,
  className,
}) => {
  return <img src={src} alt={alt} draggable={false} className={cn(className)} />
}
