import { ChangeEvent } from 'react'

export const useDebounce = (
  cb: (event: ChangeEvent<HTMLInputElement>) => void,
  ms = 500
) => {
  let timer: ReturnType<typeof setTimeout>

  return (event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      cb.call(this, event)
    }, ms)
  }
}
