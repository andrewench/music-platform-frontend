import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ViewLayout } from '@/components/layout'

export const LikedSongsView: FC = () => {
  const { t } = useTranslation()

  return <ViewLayout>{t('sections.sidebar.items.liked')}</ViewLayout>
}
