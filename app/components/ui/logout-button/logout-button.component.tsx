import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { IoLogOutOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'

import Cookies from 'js-cookie'

import { StyledButton } from '@/components/ui'

import { useLogoutMutation } from '@/shared/api'

import { AppConstant } from '@/shared/constants'

import styles from './logout-button.module.scss'

export const LogoutButton: FC = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const [logoutUser, { data }] = useLogoutMutation()

  useEffect(() => {
    if (!data) return

    Cookies.remove(AppConstant.COOKIE.AT_PREFIX)
    Cookies.remove(AppConstant.COOKIE.RT_PREFIX)

    navigate('/login?act=sign_in')
  }, [data, navigate, t])

  return (
    <StyledButton
      type="button"
      variant="outlined"
      onClick={() => logoutUser(null)}
      className={styles.button}
    >
      <IoLogOutOutline size={20} className={styles.icon} />
    </StyledButton>
  )
}
