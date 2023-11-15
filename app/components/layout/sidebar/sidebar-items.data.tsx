import { Heart, MessageCircle, Radio, Settings2, User2 } from 'lucide-react'
import { ReactNode } from 'react'

export type TSideBarItemsList = {
  to: string
  labelKey: string
  icon: ReactNode
}

export const sideBarItemsList: TSideBarItemsList[] = [
  {
    to: '/account',
    labelKey: 'sections.sidebar.items.account',
    icon: <User2 size={20} strokeWidth={1.5} />,
  },
  {
    to: '/messenger',
    labelKey: 'sections.sidebar.items.messenger',
    icon: <MessageCircle size={20} strokeWidth={1.5} />,
  },
  {
    to: '/subscriptions',
    labelKey: 'sections.sidebar.items.subscriptions',
    icon: <Radio size={20} strokeWidth={1.5} />,
  },
  {
    to: '/liked',
    labelKey: 'sections.sidebar.items.liked',
    icon: <Heart size={20} strokeWidth={1.5} />,
  },
  {
    to: '/settings',
    labelKey: 'sections.sidebar.items.settings',
    icon: <Settings2 size={20} strokeWidth={1.5} />,
  },
]
