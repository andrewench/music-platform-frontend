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

import { useConfiguratedForm, useSubmitHandler } from '@/shared/hooks'

import { ICreatePlaylistFields } from '@/shared/types'

import styles from './create-playlist.module.scss'

export const CreatePlaylistView: FC = () => {
  const methods =
    useConfiguratedForm<ICreatePlaylistFields>(CreatePlaylistSchema)

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
          <TextField<ICreatePlaylistFields>
            label={t('sections.playlist.create.name')}
            type="text"
            minLength={30}
            fieldState="name"
            register={methods.register}
          />

          <TextField<ICreatePlaylistFields>
            label={t('sections.playlist.create.description')}
            type="text"
            minLength={30}
            fieldState="description"
            register={methods.register}
            multiLine
          />

          <TextField<ICreatePlaylistFields>
            label={t('sections.playlist.create.genre')}
            type="text"
            minLength={30}
            fieldState="genre"
            register={methods.register}
          />

          <CheckboxField label={t('sections.playlist.create.private')} />

          <PrimaryButton type="submit">{t('common.save')}</PrimaryButton>
        </FormLayout>
      </SectionBlock>
    </ViewLayout>
  )
}
