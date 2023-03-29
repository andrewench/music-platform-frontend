import { FC } from 'react'

import cn from 'clsx'

import { FlexContainer } from '@/components/global'

import { PrimaryButton, Spinner } from '@/components/ui'

import { IFormSubmit } from './form-submit.interface'

import styles from './form-submit.module.scss'

export const FormSubmit: FC<IFormSubmit> = ({
  isFetching,
  className,
  children,
}) => {
  return (
    <FlexContainer>
      <div className={cn(styles.box, className)}>
        <PrimaryButton type="submit">{children}</PrimaryButton>

        {isFetching && <Spinner className={styles.spinner} />}
      </div>
    </FlexContainer>
  )
}
