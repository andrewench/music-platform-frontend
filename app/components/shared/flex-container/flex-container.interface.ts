import { PropsWithChildren } from 'react'

import { PropsWithClassName } from '@/types'

type TDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type TAlignOnMainAxis = 'start' | 'end' | 'center'
type TAlignOnCrossAxis =
  | 'start'
  | 'end'
  | 'between'
  | 'center'
  | 'around'
  | 'evenly'

export interface IFlexContainer
  extends PropsWithChildren<PropsWithClassName<unknown>> {
  isCentered?: boolean
  direction?: TDirection
  align?: TAlignOnMainAxis
  content?: TAlignOnCrossAxis
  isGrid?: boolean
  isRtlDetect?: boolean
  className?: string
}
