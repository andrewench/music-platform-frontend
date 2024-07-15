import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import { FormLayout, ModalWindow } from '@/components/layout'

import {
  AvatarUploaderField,
  PrimaryButton,
  SecondaryButton,
} from '@/components/ui'

import { Flex } from '@/components/shared'

import { useActions, useSubmitHandler } from '@/shared/hooks'

import { axiosInstance } from '@/config/axios.instance'

import styles from './avatar-uploader-modal.module.scss'

export const AvatarUploaderModal = () => {
  const [canUpload, setCanUpload] = useState<boolean>(false)

  const formRef = useRef<HTMLFormElement>(null)

  const methods = useForm<{ picture: File }>({
    mode: 'onChange',
  })

  const { closeModalWindow } = useActions()

  const { t } = useTranslation()

  const uploadAvatarMutation = useMutation({
    mutationFn: async (body: FormData) =>
      (await axiosInstance.post('/user/avatar', body)).data,
    onSuccess: () => {
      closeModalWindow('avatarUploader')

      toast.success(t('modals.avatar.successUpload'))
    },
  })

  const onSubmit = useSubmitHandler<{ picture: File }>(async file => {
    if (!formRef.current) return

    const formData = new FormData()

    formData.append('file', file.picture)

    // id - 1 for test
    formData.append('userId', String(1))

    uploadAvatarMutation.mutate(formData)
  })

  return (
    <ModalWindow title={t('modals.avatar.title')}>
      <FormLayout<{ picture: File }>
        methods={methods}
        onSubmit={onSubmit}
        encType="multipart/form-data"
        ref={formRef}
      >
        <AvatarUploaderField setUploadFlag={setCanUpload} formRef={formRef} />

        <p className={styles.note}>{t('modals.avatar.format')}</p>

        <Flex align="center" content="end" className={styles.actions}>
          <PrimaryButton
            type="submit"
            variant={canUpload ? 'filled' : 'disabled'}
          >
            {t('modals.avatar.positive')}
          </PrimaryButton>

          <SecondaryButton
            type="button"
            onClick={() => closeModalWindow('avatarUploader')}
          >
            {t('modals.avatar.negative')}
          </SecondaryButton>
        </Flex>
      </FormLayout>
    </ModalWindow>
  )
}
