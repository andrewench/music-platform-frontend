import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { AxiosResponse } from 'axios'

import { FormLayout } from '@/components/layout'

import { FormSubmit, PasswordField, TextField } from '@/components/ui'

import { FormHelper } from '@/components/shared'

import { SignInFieldsSchema } from '@/shared/schemes'

import { Constants } from '@/shared/constants'

import { useConfiguredForm, useSubmitHandler } from '@/shared/hooks'

import { TLoginRoutes, TSignInFields } from '@/shared/types'

import { axiosInstance } from '@/config/axios.instance'

import styles from './login-form.module.scss'

export const LoginForm = () => {
  const methods = useConfiguredForm<TSignInFields>(SignInFieldsSchema)
  const { t } = useTranslation()

  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: async (payload: TSignInFields) => {
      const response = await axiosInstance.post<
        unknown,
        AxiosResponse<{ status: string }>,
        TSignInFields
      >('/auth/login', payload)

      return response.data
    },
    onSuccess: () => {
      toast.success('Login Successfully')

      const promise = new Promise<void>(resolve => {
        setTimeout(() => {
          resolve()
        }, 1 * 1000)
      })

      toast.promise(promise, {
        loading: 'Redirecting...',
        success: () => {
          navigate('/playlists')

          return ''
        },
        error: () => 'asdfds',
      })
    },
  })

  const onSubmit = useSubmitHandler<TSignInFields>(credentials => {
    loginMutation.mutate(credentials)
  })

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

        <FormSubmit
          isFetching={loginMutation.isPending}
          className={styles.submit}
        >
          {t('common.signIn')}
        </FormSubmit>
      </FormLayout>

      <FormHelper<TLoginRoutes>
        label={t('helpers.accountNotExists')}
        link={{
          label: `${t('common.signUp')}.`,
          href: `/login?act=${Constants.AUTH.QUERY_PARAMS.signUp}`,
        }}
      />

      <FormHelper<TLoginRoutes>
        label={t('helpers.forgotPassword')}
        link={{
          label: `${t('common.restore')}.`,
          href: `/login?act=${Constants.AUTH.QUERY_PARAMS.restore}`,
        }}
      />
    </>
  )
}
