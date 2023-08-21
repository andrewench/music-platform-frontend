import { ForwardedRef, forwardRef } from 'react'
import { FieldValues, FormProvider } from 'react-hook-form'

import cn from 'clsx'

import { IFormLayout } from './form-layout.interface'

const ForwardedFormLayout = <T extends FieldValues>(
  { methods, onSubmit, encType, children, className }: IFormLayout<T>,
  ref: ForwardedRef<HTMLFormElement>
) => {
  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        encType={encType}
        ref={ref}
        className={cn(className)}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export const FormLayout = forwardRef(ForwardedFormLayout)
