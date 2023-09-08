import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { IoLogOutOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'

import { Flex } from '@/components/shared'

import { TokenService } from '@/services'

import { useLogoutMutation } from '@/shared/api'

import { useActions } from '@/shared/hooks'

import styles from './logout-button.module.scss'

export const LogoutButton: FC = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const { clearUserData } = useActions()

  const [logoutUser, { data }] = useLogoutMutation()

  useEffect(() => {
    if (!data) return

    clearUserData()

    TokenService.removeToken('accessToken')
    TokenService.removeToken('refreshToken')

    navigate('/login?act=sign_in')
  }, [data, navigate, clearUserData, t])

  return (
    <button
      type="button"
      onClick={() => logoutUser(null)}
      className={styles.button}
    >
      <Flex align="center" className={styles.box}>
        <IoLogOutOutline size={22} />
        <span>{t('sections.header.dropList.logout')}</span>
      </Flex>
    </button>
  )
}
