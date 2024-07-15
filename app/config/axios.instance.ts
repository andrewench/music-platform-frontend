import { Mutex } from 'async-mutex'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { Constants } from '@/shared/constants'

const mutex = new Mutex()

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_HOST + Constants.BASE_API_PREFIX,
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  res => res,
  async (err: AxiosError) => {
    await mutex.waitForUnlock()

    const originalRequest = err.config as AxiosRequestConfig

    let result = null

    if (
      err.response?.status === 401 &&
      err.response?.statusText === 'Unauthorized'
    ) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()

        try {
          const response = await axios.post(
            'api/auth/refresh',
            {},
            {
              withCredentials: true,
            }
          )

          if (response.data.status === 'OK') {
            result = await axiosInstance(originalRequest)
          }
        } catch (err) {
          if (axios.isAxiosError(err)) {
            const response = err.response?.data as {
              statusCode: number
              message: string
            }

            if (
              response.statusCode === 401 &&
              response.message === 'Unauthorized'
            ) {
              window.location.replace('/login')
            }
          }
        } finally {
          release()
        }
      } else {
        await mutex.waitForUnlock()

        result = await axiosInstance(originalRequest)
      }

      return result
    }

    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.reject(err)
  }
)
