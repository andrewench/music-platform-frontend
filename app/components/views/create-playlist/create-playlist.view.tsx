import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FormLayout, SectionBlock, ViewLayout } from '@/components/layout'
import {
  BackLink,
  CheckboxField,
  PrimaryButton,
  TextField,
} from '@/components/ui'
import { SectionTitle } from '@/components/shared'
import { CreatePlaylistSchema } from '@/shared/schemes'
import { useConfiguredForm, useSubmitHandler } from '@/shared/hooks'
import { ICreatePlaylistFields } from '@/shared/types'
import { CreatePlaylistFieldsList } from './create-playlist-fields.data'
import styles from './create-playlist.module.scss'

export const CreatePlaylistView: FC = () => {
  const methods = useConfiguredForm<ICreatePlaylistFields>(CreatePlaylistSchema)

  const { t } = useTranslation()

  const onSubmit = useSubmitHandler<ICreatePlaylistFields>(() => {})

  return (
    <ViewLayout>
      <SectionBlock>
        <BackLink
          label={`${t('common.back')} ${t(
            'sections.header.links.playlists'
          ).toLowerCase()}`}
          to="/playlists"
        />

        <SectionTitle className={styles.title}>
          {t('sections.playlist.create.title')}
        </SectionTitle>

        <FormLayout
          methods={methods}
          onSubmit={onSubmit}
          className={styles.form}
        >
          {CreatePlaylistFieldsList.map(({ labelKey, ...props }, idx) => (
            <TextField
              label={t(labelKey)}
              minLength={30}
              register={methods.register}
              {...props}
              key={idx}
            />
          ))}

          <CheckboxField
            label={t('sections.playlist.create.private')}
            onChange={() => {}}
          />

          <PrimaryButton type="submit">{t('common.save')}</PrimaryButton>
        </FormLayout>
      </SectionBlock>
    </ViewLayout>
  )
}
