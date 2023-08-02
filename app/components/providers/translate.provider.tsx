import { FC, PropsWithChildren } from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'

import i18next from 'i18next'

import languageList from '@/shared/languages'

type TLanguageItem = Record<
  string,
  {
    translation: (typeof languageList)['en']
  }
>

const generateLanguages = (langList: typeof languageList): TLanguageItem => {
  const resources: TLanguageItem = {}

  Object.keys(langList).forEach(lang => {
    resources[lang] = {
      translation: langList[lang as keyof typeof langList],
    }
  })

  return resources
}

const initTranslateConfig = async () => {
  await i18next.use(initReactI18next).init({
    lng: 'en',
    resources: {
      ...generateLanguages(languageList),
    },
  })

  return i18next
}

const config = await initTranslateConfig()

export const TranslateProvider: FC<Required<PropsWithChildren>> = ({
  children,
}) => {
  return <I18nextProvider i18n={config}>{children}</I18nextProvider>
}
