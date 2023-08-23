import { FC, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { FormLayout } from '@/components/layout'

import { FormSubmit, PasswordField, TextField } from '@/components/ui'

import { FormHelper } from '@/components/shared'

import { LoginService } from '@/services'

import { useLoginMutation } from '@/shared/api'

import { SignInFieldsSchema } from '@/shared/schemes'

import { AppConstant } from '@/shared/constants'

import { useConfiguredForm, useSubmitHandler } from '@/shared/hooks'

import { TErrorResponse, TLoginRoutes, TSignInFields } from '@/shared/types'

import styles from './login-form.module.scss'

export const LoginForm: FC = () => {
  const methods = useConfiguredForm<TSignInFields>(SignInFieldsSchema)
  const { t } = useTranslation()

  const navigate = useNavigate()

  const [loginUser, { data, error, isLoading }] = useLoginMutation()

  const onSubmit = useSubmitHandler<TSignInFields>(credentials => {
    loginUser(credentials)
  })

  useEffect(() => {
    LoginService.authSuccess(
      data,
      {
        logged: t('server.success.loggedIn'),
        redirect: t('server.success.redirect'),
        unknown: t('server.error.unknown'),
      },
      () => {
        navigate('/playlists')
      }
    )
  }, [data, navigate, t])

  useEffect(() => {
    if (!error) return

    const { data } = error as TErrorResponse

    if (data.error) toast.error(t(`server.error.${data.error}`))
  }, [error, t])

  return (
    <>
      <FormLayout methods={methods} onSubmit={onSubmit} className={styles.form}>
        <TextField
          label={t('form.login.fieldName')}
          type="text"
          fieldState="login"
          register={methods.register}
          isDebounced
        />

        <PasswordField
          label={t('form.password.fieldName')}
          fieldState="password"
          register={methods.register}
        />

        <FormSubmit isFetching={isLoading} className={styles.submit}>
          {t('common.signIn')}
        </FormSubmit>
      </FormLayout>

      <FormHelper<TLoginRoutes>
        label={t('helpers.accountNotExists')}
        link={{
          label: `${t('common.signUp')}.`,
          href: `/login?act=${AppConstant.AUTH.QUERY_PARAMS.signUp}`,
        }}
      />

      <FormHelper<TLoginRoutes>
        label={t('helpers.forgotPassword')}
        link={{
          label: `${t('common.restore')}.`,
          href: `/login?act=${AppConstant.AUTH.QUERY_PARAMS.restore}`,
        }}
      />
    </>
  )
}
