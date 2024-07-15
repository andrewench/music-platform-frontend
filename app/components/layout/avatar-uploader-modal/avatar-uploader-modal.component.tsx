import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useAtom } from 'jotai'
import { FormLayout, ModalWindow } from '@/components/layout'
import {
  AvatarUploaderField,
  PrimaryButton,
  SecondaryButton,
} from '@/components/ui'
import { Flex } from '@/components/shared'
import { modalsAtom, userAtom } from '@/store'
import { useSubmitHandler } from '@/shared/hooks'
import { axiosInstance } from '@/config/axios.instance'
import styles from './avatar-uploader-modal.module.scss'

export const AvatarUploaderModal = () => {
  const [canUpload, setCanUpload] = useState<boolean>(false)
  const [userData] = useAtom(userAtom)
  const [modals, setModals] = useAtom(modalsAtom)

  const formRef = useRef<HTMLFormElement>(null)

  const methods = useForm<{ picture: File }>({
    mode: 'onChange',
  })

  const { t } = useTranslation()

  const closeModalHandler = () => {
    setModals({
      ...modals,
      avatar: {
        open: false,
      },
    })
  }

  const uploadAvatarMutation = useMutation({
    mutationFn: async (body: FormData) =>
      (await axiosInstance.post('/user/avatar', body)).data,
    onSuccess: () => {
      closeModalHandler()

      toast.success(t('modals.avatar.successUpload'))
    },
  })

  const onSubmit = useSubmitHandler<{ picture: File }>(async file => {
    if (!formRef.current) return

    const formData = new FormData()

    formData.append('file', file.picture)
    formData.append('userId', String(userData.profile.id))

    uploadAvatarMutation.mutate(formData)
  })

  return (
    <ModalWindow title={t('modals.avatar.title')} modalName="avatar">
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

          <SecondaryButton type="button" onClick={closeModalHandler}>
            {t('modals.avatar.negative')}
          </SecondaryButton>
        </Flex>
      </FormLayout>
    </ModalWindow>
  )
}
