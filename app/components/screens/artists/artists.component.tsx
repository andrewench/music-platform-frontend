import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountLayout, PageLayout } from '@/components/layout'
import { ArtistsView } from '@/components/views'

export const Artists: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.header.links.artists')}>
      <AccountLayout>
        <ArtistsView />
      </AccountLayout>
    </PageLayout>
  )
}
