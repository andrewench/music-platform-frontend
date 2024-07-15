import { FC } from 'react'
import { LoginForm, RestoreForm, SignUpForm } from '@/components/layout'
import { TLoginQueries } from '@/shared/types'

export const FormRenderer: FC<{ query: TLoginQueries }> = ({ query }) => {
  switch (query) {
    case 'sign_in':
      return <LoginForm />

    case 'sign_up':
      return <SignUpForm />

    case 'restore':
      return <RestoreForm />
  }
}
