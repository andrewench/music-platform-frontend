import { PropsWithChildren } from 'react'

export type PropsWithClassName<P = unknown> = P & {
  className?: string
}

export type PropsWithChildrenAndClassName<P = unknown> = P &
  PropsWithChildren<PropsWithClassName>
