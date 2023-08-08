type THeaderLinksList = Record<'to' | 'labelKey', string>

export const headerLinksList: THeaderLinksList[] = [
  {
    to: '/podcasts',
    labelKey: 'sections.header.links.podcasts',
  },
  {
    to: '/playlists',
    labelKey: 'sections.header.links.playlists',
  },
  {
    to: '/artists',
    labelKey: 'sections.header.links.artists',
  },
  {
    to: '/chart',
    labelKey: 'sections.header.links.chart',
  },
]
