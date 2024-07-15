import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountLayout, PageLayout } from '@/components/layout'
import { PodcastsView } from '@/components/views'

export const Podcasts: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.header.links.podcasts')}>
      <AccountLayout>
        <PodcastsView />
      </AccountLayout>
    </PageLayout>
  )
}
