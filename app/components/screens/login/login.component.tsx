import { FC, useLayoutEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'
import isElectron from 'is-electron'

import { version as appVersion } from '@@/package.json'

import { FlexContainer } from '@/components/shared'

import { TLoginQueries } from '@/shared/types'

import { FormRenderer } from './form-renderer.component'

import styles from './login.module.scss'

export const Login: FC = () => {
  const [loginQuery, setLoginQuery] = useState<TLoginQueries>('sign_in')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const actQuery = searchParams.get('act') as TLoginQueries

    if (!actQuery) {
      navigate('/login?act=sign_in')
    }

    switch (actQuery) {
      case 'sign_in':
        setLoginQuery('sign_in')
        break

      case 'sign_up':
        setLoginQuery('sign_up')
        break

      case 'restore':
        setLoginQuery('restore')
        break
    }
  }, [loginQuery, searchParams, navigate])

  return (
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
                Music Platform
              </h1>

              <FormRenderer query={loginQuery} />
            </>
          </FlexContainer>
        </FlexContainer>
      </SimpleBar>
    </FlexContainer>
  )
}
