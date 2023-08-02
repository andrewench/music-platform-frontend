import { BaseSyntheticEvent, useCallback } from 'react'
import { FieldValues, SubmitHandler } from 'react-hook-form'

export const useSubmitHandler = <T extends FieldValues>(
  cb: (data: T, event?: BaseSyntheticEvent) => unknown | Promise<unknown>
) => {
  const submitHandler: SubmitHandler<T> = useCallback(
    (data, event) => cb(data, event),
    [cb]
  )

  return submitHandler
}
