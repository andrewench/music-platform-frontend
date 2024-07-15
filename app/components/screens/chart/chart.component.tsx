import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountLayout, PageLayout } from '@/components/layout'
import { ChartView } from '@/components/views'

export const Chart: FC = () => {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('sections.header.links.chart')}>
      <AccountLayout>
        <ChartView />
      </AccountLayout>
    </PageLayout>
  )
}
