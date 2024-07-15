import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { FormLayout } from '@/components/layout'
import { FormSubmit, PasswordField, TextField } from '@/components/ui'
import { FormHelper } from '@/components/shared'
import { SignUpFieldsSchema } from '@/shared/schemes'
import { Constants } from '@/shared/constants'
import { useConfiguredForm, useSubmitHandler } from '@/shared/hooks'
import { TLoginRoutes, TSignUpFields, TSignUpFormFields } from '@/shared/types'
import { SignUpFieldsList } from './signup-form.data'
import { axiosInstance } from '@/config/axios.instance'
import styles from './signup-form.module.scss'

export const SignUpForm: FC = () => {
  const methods = useConfiguredForm<TSignUpFormFields>(SignUpFieldsSchema)
  const { t } = useTranslation()

  const navigate = useNavigate()

  const signUpMutation = useMutation({
    mutationFn: async (payload: TSignUpFields) => {
      const response = await axiosInstance.put<
        unknown,
        AxiosResponse<{ status: string }>,
        TSignUpFields
      >('/auth/signup', payload)

      return response.data
    },
    onSuccess: () => {
      toast.success('Successfully')

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
        error: () => '',
      })
    },
  })

  const onSubmit = useSubmitHandler<TSignUpFields>(credentials => {
    signUpMutation.mutate(credentials)
  })

  return (
    <>
      <FormLayout methods={methods} onSubmit={onSubmit} className={styles.form}>
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

        <FormSubmit isFetching={signUpMutation.isPending}>
          {t('common.signUp')}
        </FormSubmit>
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
