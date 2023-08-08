import { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'

import { version as appVersion } from '@@/package.json'

import { PageLayout } from '@/components/layout'

import { Flex } from '@/components/shared'

import { LoginService } from '@/services'

import { AppConstant } from '@/shared/constants'

import { FormRenderer } from './form-renderer.component'

import styles from './login.module.scss'

export const Login: FC = () => {
  const [redirectedUrl, setRedirectedUrl] = useState<string>('')
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

    if (resolvedUrl?.redirect && !redirectedUrl.length)
      setRedirectedUrl(resolvedUrl?.redirect)
  }, [searchParams, navigate, redirectedUrl])

  useEffect(() => {
    if (!redirectedUrl.length) return

    navigate(redirectedUrl)
  }, [navigate, redirectedUrl])

  return (
    <PageLayout title={t('common.signIn')}>
      <Flex isRtlDetect>
        <div className={cn(styles.poster, styles.block)} />

        <SimpleBar className={cn(styles.scrollBar, styles.block)}>
          <Flex isCentered className={styles.box}>
            <Flex isCentered direction="column">
              <h1 className={styles.heading} data-version={appVersion}>
                {AppConstant.APP_NAME}
              </h1>

              <FormRenderer query={loginQuery} />
            </Flex>
          </Flex>
        </SimpleBar>
      </Flex>
    </PageLayout>
  )
}
