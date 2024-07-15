import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ViewLayout } from '@/components/layout'

export const PodcastsView: FC = () => {
  const { t } = useTranslation()

  return <ViewLayout>{t('sections.header.links.podcasts')}</ViewLayout>
}
