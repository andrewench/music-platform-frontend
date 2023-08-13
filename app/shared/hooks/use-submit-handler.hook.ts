import { BaseSyntheticEvent, useCallback } from 'react'
import { FieldValues, SubmitHandler } from 'react-hook-form'

export const useSubmitHandler = <T extends FieldValues>(
  callback: (data: T, event?: BaseSyntheticEvent) => unknown | Promise<unknown>
) => {
  const submitHandler: SubmitHandler<T> = useCallback(
    (data, event) => callback(data, event),
    [callback]
  )

  return submitHandler
}
