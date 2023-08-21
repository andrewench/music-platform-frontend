import {
  FC,
  RefObject,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IoCloseCircleOutline } from 'react-icons/io5'

import { Flex } from '@/components/shared'

import { AppConstant } from '@/shared/constants'

import { StateAction } from '@/shared/types'

import styles from './avatar-uploader-field.module.scss'

interface IAvatarUploaderField {
  setUploadFlag: StateAction<boolean>
  formRef: RefObject<HTMLFormElement>
}

export const AvatarUploaderField: FC<IAvatarUploaderField> = ({
  setUploadFlag,
  formRef,
}) => {
  const [imageName, setImageName] = useState<string>('')

  const labelId = useId()

  const inputRef = useRef<HTMLInputElement>(null)

  const { t } = useTranslation()

  const {
    register,
    formState: { errors },
    setError,
    setValue,
    resetField,
  } = useFormContext<{ picture: File }>()

  const onChange = useCallback(() => {
    const input = inputRef.current

    if (!input) return
    if (!input.files) return

    if (input.files[0].size >= AppConstant.FILES.IMAGE.MAX_SIZE) {
      setError('picture', {
        message: `The image should not exceed 5mb`,
      })
    } else if (input.files[0]) {
      setUploadFlag(true)
      setValue('picture', input.files[0])

      setImageName(input.files[0].name)
    }
  }, [setError, setUploadFlag, setValue])

  const detachSelectedImage = () => {
    formRef.current?.reset()

    resetField('picture')
    setImageName('')
    setUploadFlag(false)
  }

  const overrideRegister = useMemo(
    () => ({
      ...register('picture'),
      name: 'files[]',
      ref: inputRef,
      onChange,
    }),
    [register, onChange]
  )

  return (
    <>
      <label htmlFor={labelId} className={styles.label}>
        {t('modals.avatar.file')}

        <input
          id={labelId}
          type="file"
          accept="image/jpg,image/png,image/jpeg"
          className={styles.file}
          {...overrideRegister}
        />
      </label>

      {imageName && (
        <Flex align="center" className={styles.fileName}>
          <span>{imageName}</span>

          <button
            type="button"
            onClick={() => {
              detachSelectedImage()
            }}
          >
            <IoCloseCircleOutline size={22} />
          </button>
        </Flex>
      )}

      {errors.picture?.message && (
        <p className={styles.error}>{errors.picture.message}</p>
      )}
    </>
  )
}
