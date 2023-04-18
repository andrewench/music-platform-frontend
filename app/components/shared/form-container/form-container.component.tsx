import { FieldValues, FormProvider } from 'react-hook-form'

import cn from 'clsx'

import { IFormContainer } from './form-container.interface'

import styles from './form-container.module.scss'

export const FormContainer = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
}: IFormContainer<T>) => {
  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(styles.form, className)}
      >
        {children}
      </form>
    </FormProvider>
  )
}
