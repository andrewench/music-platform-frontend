import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

import { PropsWithChildrenAndClassName } from '@/shared/types'

export interface IFormLayout<T extends FieldValues>
  extends PropsWithChildrenAndClassName {
  methods: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
  encType?: string
}
