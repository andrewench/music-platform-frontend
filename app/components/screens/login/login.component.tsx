import { FC, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'
import isElectron from 'is-electron'

import { version as appVersion } from '@@/package.json'

import { PageLayout } from '@/components/layout'

import { FlexContainer } from '@/components/shared'

import { LoginService } from '@/services'

import { AppConstant } from '@/shared/constants'

import { FormRenderer } from './form-renderer.component'

import styles from './login.module.scss'

export const Login: FC = () => {
  const [loginQuery, setLoginQuery] = useState(
    AppConstant.AUTH.QUERY_PARAMS.signIn
  )

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const { t } = useTranslation()

  useLayoutEffect(() => {
    const resolvedUrl = LoginService.setRenderedFormStep(
      searchParams,
      setLoginQuery
    )

    if (resolvedUrl?.redirect) navigate(resolvedUrl?.redirect)
  }, [searchParams, navigate])

  return (
    <PageLayout title={t('common.signIn')}>
      <FlexContainer
        isRtlDetect
        className={cn({
          [styles.rounded]: isElectron(),
        })}
      >
        <div className={cn(styles.poster, styles.block)} />

        <SimpleBar className={cn(styles.scrollBar, styles.block)}>
          <FlexContainer isCentered className={styles.box}>
            <FlexContainer isCentered direction="column">
              <>
                <h1 className={styles.heading} data-version={appVersion}>
                  {AppConstant.APP_NAME}
                </h1>

                <FormRenderer query={loginQuery} />
              </>
            </FlexContainer>
          </FlexContainer>
        </SimpleBar>
      </FlexContainer>
    </PageLayout>
  )
}
