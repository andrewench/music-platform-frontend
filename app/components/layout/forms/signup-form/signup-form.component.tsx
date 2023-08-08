import { FC, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { SignUpFieldsList } from './signup-form.data'

import { FormSubmit, PasswordField, TextField } from '@/components/ui'

import { FormContainer, FormHelper } from '@/components/shared'

import { LoginService } from '@/services'

import { useSignUpMutation } from '@/shared/api'

import { SignUpFieldsSchema } from '@/shared/schemes'

import { AppConstant } from '@/shared/constants'

import { useConfiguratedForm, useSubmitHandler } from '@/shared/hooks'

import {
  TErrorResponse,
  TLoginRoutes,
  TSignUpFields,
  TSignUpFormFields,
} from '@/shared/types'

export const SignUpForm: FC = () => {
  const methods = useConfiguratedForm<TSignUpFormFields>(SignUpFieldsSchema)
  const { t } = useTranslation()

  const navigate = useNavigate()

  const [signUp, { data, error, isLoading }] = useSignUpMutation()

  const onSubmit = useSubmitHandler<TSignUpFields>(credentials => {
    signUp(credentials)
  })

  useEffect(() => {
    LoginService.authSuccess(
      data,
      {
        logged: t('server.success.registered'),
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
  }, [error, t, methods])

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

        <FormSubmit isFetching={isLoading}>{t('common.signUp')}</FormSubmit>
      </FormContainer>

      <FormHelper<TLoginRoutes>
        label={t('helpers.accountExists')}
        link={{
          href: `/login?act=${AppConstant.AUTH.QUERY_PARAMS.signIn}`,
          label: `${t('common.signIn')}.`,
        }}
      />
    </>
  )
}
