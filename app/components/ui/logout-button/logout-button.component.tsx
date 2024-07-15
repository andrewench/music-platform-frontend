import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import { Flex } from '@/components/shared'

import { axiosInstance } from '@/config/axios.instance'

import styles from './logout-button.module.scss'

export const LogoutButton: FC = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const logoutMutation = useMutation<{ status: string }>({
    mutationFn: async () => (await axiosInstance.delete('/auth/logout')).data,
  })

  useEffect(() => {
    if (!logoutMutation.data) return

    if (logoutMutation.data.status === 'OK') {
      navigate('/login?act=sign_in')
    }
  }, [logoutMutation.data, navigate])

  return (
    <button
      type="button"
      onClick={() => {
        logoutMutation.mutate()
      }}
      className={styles.button}
    >
      <Flex align="center" className={styles.box}>
        <LogOut size={20} strokeWidth={1.5} />
        <span>{t('sections.header.dropList.logout')}</span>
      </Flex>
    </button>
  )
}
