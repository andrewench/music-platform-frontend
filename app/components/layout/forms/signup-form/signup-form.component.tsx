import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { FormContainer } from '@/components/global'

import {
  FormHelper,
  FormSubmit,
  PasswordField,
  TextField,
} from '@/components/ui'

import { SignUpFieldsList } from '@/data'

import { TLoginRoutes, TSignUpFields } from '@/types'

import { useConfiguredForm } from '@/hooks'

import { SignUpFieldsSchema } from '@/schemes'

export const SignUpForm: FC = () => {
  const methods = useConfiguredForm<TSignUpFields>(SignUpFieldsSchema)
  const { t } = useTranslation()

  const onSubmit: SubmitHandler<TSignUpFields> = data => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

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
