import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { FormSubmit, TextField } from '@/components/ui'

import { FormContainer, FormHelper } from '@/components/shared'

import { useConfiguredForm } from '@/hooks'

import { RestoreFieldsSchema } from '@/shared/schemes'

import { TLoginRoutes, TRestoreField } from '@/types'

export const RestoreForm: FC = () => {
  const methods = useConfiguredForm<TRestoreField>(RestoreFieldsSchema)
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<TRestoreField> = data => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <FormContainer methods={methods} onSubmit={onSubmit}>
        <TextField
          type="email"
          label={t('form.email.fieldName')}
          register={methods.register}
          fieldState="email"
        />
        <FormSubmit isFetching={false}>{t('common.sendCode')}</FormSubmit>
      </FormContainer>

      <FormHelper<TLoginRoutes>
        label={t('helpers.accountExists')}
        link={{
          href: '/login?act=sign_in',
          label: `${t('common.signIn')}.`,
        }}
      />
    </>
  )
}
