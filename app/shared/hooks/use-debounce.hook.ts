/* eslint-disable @typescript-eslint/no-explicit-any */
export const useDebounce = (cb: (...args: any) => void, ms = 500) => {
  let timer: ReturnType<typeof setTimeout>

  return (...args: any) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      cb.call(this, args)
    }, ms)
  }
}
