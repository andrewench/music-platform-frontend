import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from '@/components/global'

import '@/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
