import { FC } from 'react'
import cn from 'clsx'
import styles from './switch-icon.module.scss'

type TSwitchIcon = {
  type: 'next' | 'prev'
}

export const SwitchIcon: FC<TSwitchIcon> = ({ type }) => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn({
        [styles.rotated]: type === 'next',
      })}
    >
      <path
        d="M17.4375 2.5039V19.4961C17.4375 20.518 16.4414 21.1672 15.6211 20.6773L1.09512 11.9838C0.384961 11.559 0.384961 10.441 1.09512 10.0162L15.6211 1.32265C16.4414 0.832803 17.4375 1.48202 17.4375 2.5039Z"
        stroke="#3C3C3C"
        strokeMiterlimit="10"
      />
      <path
        d="M0.5625 0.6875V21.3125"
        stroke="#3C3C3C"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  )
}
