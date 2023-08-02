import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormSubmit, TextField } from '@/components/ui'

import { FormContainer, FormHelper } from '@/components/shared'

import { RestoreFieldsSchema } from '@/shared/schemes'

import { useConfiguratedForm, useSubmitHandler } from '@/shared/hooks'

import { TLoginRoutes, TRestoreField } from '@/shared/types'

export const RestoreForm: FC = () => {
  const methods = useConfiguratedForm<TRestoreField>(RestoreFieldsSchema)
  const { t } = useTranslation()

  const onSubmit = useSubmitHandler<TRestoreField>(data => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

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
