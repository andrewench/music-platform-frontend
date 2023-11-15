import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormLayout } from '@/components/layout'

import { FormSubmit, TextField } from '@/components/ui'

import { FormHelper } from '@/components/shared'

import { RestoreFieldsSchema } from '@/shared/schemes'

import { Constants } from '@/shared/constants'

import { useConfiguredForm, useSubmitHandler } from '@/shared/hooks'

import { TLoginRoutes, TRestoreField } from '@/shared/types'

import styles from './restore-form.module.scss'

export const RestoreForm: FC = () => {
  const methods = useConfiguredForm<TRestoreField>(RestoreFieldsSchema)
  const { t } = useTranslation()

  const onSubmit = useSubmitHandler<TRestoreField>(data => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

  return (
    <>
      <FormLayout methods={methods} onSubmit={onSubmit} className={styles.form}>
        <TextField
          type="email"
          label={t('form.email.fieldName')}
          register={methods.register}
          fieldState="email"
        />
        <FormSubmit isFetching={false}>{t('common.sendCode')}</FormSubmit>
      </FormLayout>

      <FormHelper<TLoginRoutes>
        label={t('helpers.accountExists')}
        link={{
          href: `/login?act=${Constants.AUTH.QUERY_PARAMS.signIn}`,
          label: `${t('common.signIn')}.`,
        }}
      />
    </>
  )
}
