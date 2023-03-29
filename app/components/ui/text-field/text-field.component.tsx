import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import cn from 'clsx'

import { useDebounce, useRTL } from '@/hooks'

import { ITextField } from './text-field.interface'

import styles from './text-field.module.scss'

export const TextField = <T extends FieldValues>({
  label,
  type,
  fieldState,
  register,
  minLength,
  maxLength,
  isDebounced = false,
  isCount = false,
  onChange,
  className,
}: ITextField<T>) => {
  const [value, setValue] = useState<string>('')
  const direction = useRTL()
  const { t } = useTranslation()

  const {
    formState: { errors },
  } = useFormContext<T>()

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const changeDebounceHandler = useDebounce(
    onChange ?? (() => {}),
    isDebounced ? 500 : 0
  )

  const overrideRegister = useMemo(
    () => ({
      ...register(fieldState, {
        required: true,
      }),
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        changeHandler(e)

        changeDebounceHandler(e)
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldState, register]
  )

  return (
    <div className={styles.box}>
      <input
        className={cn(
          styles.input,
          {
            [styles.filled]: value.length,
            [styles.error]: errors[fieldState],
          },
          className
        )}
        minLength={minLength}
        maxLength={maxLength}
        type={type}
        dir={direction}
        autoComplete="on"
        {...overrideRegister}
      />
      <p className={styles.label}>{label}</p>

      {errors[fieldState] && (
        <p className={styles.errorHelper}>
          {errors[fieldState] ? t(String(errors[fieldState]?.message)) : ''}
        </p>
      )}

      {isCount && value.length > 0 && (
        <div className={styles.symbolCounter}>{value.length}</div>
      )}
    </div>
  )
}
