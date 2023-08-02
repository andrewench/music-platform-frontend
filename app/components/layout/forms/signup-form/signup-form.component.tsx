import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { SignUpFieldsList } from './signup-form.data'

import { FormSubmit, PasswordField, TextField } from '@/components/ui'

import { FormContainer, FormHelper } from '@/components/shared'

import { SignUpFieldsSchema } from '@/shared/schemes'

import { useConfiguratedForm, useSubmitHandler } from '@/shared/hooks'

import { TLoginRoutes, TSignUpFields, TSignUpFormFields } from '@/shared/types'

export const SignUpForm: FC = () => {
  const methods = useConfiguratedForm<TSignUpFormFields>(SignUpFieldsSchema)
  const { t } = useTranslation()

  const onSubmit = useSubmitHandler<TSignUpFields>(data => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

  return (
    <>
      <FormContainer methods={methods} onSubmit={onSubmit}>
        {SignUpFieldsList.map(({ type, label, isCount, ...props }, idx) => {
          return type !== 'password' ? (
            <TextField
              type={type}
              label={t(label)}
              register={methods.register}
              isCount={Boolean(isCount)}
              {...props}
              key={idx}
            />
          ) : (
            <PasswordField
              label={t(label)}
              register={methods.register}
              isCount={Boolean(isCount)}
              {...props}
              key={idx}
            />
          )
        })}

        <FormSubmit isFetching={false}>{t('common.signUp')}</FormSubmit>
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
