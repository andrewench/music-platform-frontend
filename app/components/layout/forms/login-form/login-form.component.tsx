import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormSubmit, PasswordField, TextField } from '@/components/ui'

import { FormContainer, FormHelper } from '@/components/shared'

import { SignInFieldsSchema } from '@/shared/schemes'

import { useConfiguratedForm, useSubmitHandler } from '@/shared/hooks'

import { TLoginRoutes, TSignInFields } from '@/shared/types'

import styles from './login-form.module.scss'

export const LoginForm: FC = () => {
  const methods = useConfiguratedForm<TSignInFields>(SignInFieldsSchema)
  const { t } = useTranslation()

  const onSubmit = useSubmitHandler<TSignInFields>(data => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

  return (
    <>
      <FormContainer methods={methods} onSubmit={onSubmit}>
        <TextField
          label={t('form.email.fieldName')}
          type="text"
          fieldState="email"
          register={methods.register}
          isDebounced
        />

        <PasswordField
          label={t('form.password.fieldName')}
          fieldState="password"
          register={methods.register}
        />

        <FormSubmit isFetching={false} className={styles.submit}>
          {t('common.signIn')}
        </FormSubmit>
      </FormContainer>

      <FormHelper<TLoginRoutes>
        label={t('helpers.accountNotExists')}
        link={{
          label: `${t('common.signUp')}.`,
          href: '/login?act=sign_up',
        }}
      />

      <FormHelper<TLoginRoutes>
        label={t('helpers.forgotPassword')}
        link={{
          label: `${t('common.restore')}.`,
          href: '/login?act=restore',
        }}
      />
    </>
  )
}
