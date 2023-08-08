import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ViewLayout } from '@/components/layout'

export const ArtistsView: FC = () => {
  const { t } = useTranslation()

  return <ViewLayout>{t('sections.header.links.artists')}</ViewLayout>
}
