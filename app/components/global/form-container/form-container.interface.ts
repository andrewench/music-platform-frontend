import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

import { PropsWithChildrenAndClassName } from '@/types'

export interface IFormContainer<T extends FieldValues>
  extends PropsWithChildrenAndClassName {
  methods: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
}
