import { createRoot } from 'react-dom/client'
import { MainProvider } from '@/components/providers'
import '@/assets/styles/global.scss'

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(<MainProvider />)
