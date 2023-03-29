import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Router, TranslateProvider, initTranslateConfig } from '@/providers'

import '@/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TranslateProvider config={await initTranslateConfig()}>
      <Router />
    </TranslateProvider>
  </StrictMode>
)
