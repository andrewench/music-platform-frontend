import { ReactNode } from 'react'
import {
  IoChatbubblesOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoRadioOutline,
  IoSettingsOutline,
} from 'react-icons/io5'

export type TSideBarItemsList = {
  to: string
  labelKey: string
  icon: ReactNode
}

export const sideBarItemsList: TSideBarItemsList[] = [
  {
    to: '/account',
    labelKey: 'sections.sidebar.items.account',
    icon: <IoPersonOutline size={21} />,
  },
  {
    to: '/messenger',
    labelKey: 'sections.sidebar.items.messenger',
    icon: <IoChatbubblesOutline size={21} />,
  },
  {
    to: '/subscriptions',
    labelKey: 'sections.sidebar.items.subscriptions',
    icon: <IoRadioOutline size={20} />,
  },
  {
    to: '/liked',
    labelKey: 'sections.sidebar.items.liked',
    icon: <IoHeartOutline size={22} />,
  },
  {
    to: '/settings',
    labelKey: 'sections.sidebar.items.settings',
    icon: <IoSettingsOutline size={20} />,
  },
]
