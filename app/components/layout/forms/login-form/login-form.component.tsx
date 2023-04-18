import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { FormSubmit, PasswordField, TextField } from '@/components/ui'

import { FormContainer, FormHelper } from '@/components/shared'

import { useConfiguredForm } from '@/hooks'

import { SignInFieldsSchema } from '@/shared/schemes'

import { TLoginRoutes, TSignInFields } from '@/types'

import styles from './login-form.module.scss'

export const LoginForm: FC = () => {
  const methods = useConfiguredForm<TSignInFields>(SignInFieldsSchema)
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<TSignInFields> = data => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

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
