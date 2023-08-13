import { FC, useId } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ModalWindow } from '@/components/layout'

import { PrimaryButton, SecondaryButton } from '@/components/ui'

import { Flex } from '@/components/shared'

import { useActions, useSubmitHandler } from '@/shared/hooks'

import styles from './avatar-uploader-modal.module.scss'

export const AvatarUploaderModal: FC = () => {
  const labelId = useId()

  const { handleSubmit } = useForm()

  const { closeModalWindow } = useActions()

  const { t } = useTranslation()

  const onSubmit = useSubmitHandler(() => {})

  return (
    <ModalWindow title={t('modals.avatar.title')}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={labelId} className={styles.label}>
          {t('modals.avatar.file')}
          <input
            id={labelId}
            type="file"
            accept="image/jpg, image/png"
            className={styles.file}
          />
        </label>

        <p className={styles.note}>{t('modals.avatar.format')}</p>

        <Flex align="center" content="end" className={styles.actions}>
          <PrimaryButton type="submit">
            {t('modals.avatar.positive')}
          </PrimaryButton>
          <SecondaryButton
            type="button"
            onClick={() => closeModalWindow('avatarUploader')}
          >
            {t('modals.avatar.negative')}
          </SecondaryButton>
        </Flex>
      </form>
    </ModalWindow>
  )
}
