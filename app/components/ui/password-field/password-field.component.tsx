import { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

import cn from 'clsx'

import { TextField } from '@/components/ui'
import { ITextField } from '@/components/ui/text-field/text-field.interface'

import styles from './password-field.module.scss'

export const PasswordField = <T extends FieldValues>({
  label,
  className,
  ...props
}: Omit<ITextField<T>, 'type'>) => {
  const [isPasswordType, setPasswordType] = useState<boolean>(true)

  return (
    <div className={styles.box}>
      <TextField
        className={cn(styles.input, className)}
        label={label}
        type={isPasswordType ? 'password' : 'text'}
        {...props}
      />
      <button
        type="button"
        className={styles.toggle}
        onClick={() => {
          setPasswordType(prev => !prev)
        }}
      >
        {isPasswordType ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </button>
    </div>
  )
}
