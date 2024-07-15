import { MessageSquare } from 'lucide-react'
import { FC, Suspense } from 'react'
import { lazily } from 'react-lazily'
import { useSearchParams } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { ViewLayout } from '@/components/layout'
import { ChatItem } from '@/components/ui'
import { Flex } from '@/components/shared'
import { FallbackView } from '@/components/views'
import styles from './messenger.module.scss'

const { PrivateChat } = lazily(() => import('@/components/views'))

export const MessengerView: FC = () => {
  const [chatParams] = useSearchParams()

  return (
    <ViewLayout>
      <Flex className={styles.box}>
        <div>
          <div className={styles.searchBarBox}>
            <input placeholder="Search" className={styles.searchBar} />
          </div>

          <SimpleBar className={styles.chatsBox}>
            <ChatItem
              link={{ href: '/messenger?chat=1' }}
              avatar="/images/chat_avatar.png"
            />
            <ChatItem
              link={{ href: '/messenger?chat=2' }}
              avatar="/images/chat_avatar.png"
            />
            <ChatItem
              link={{ href: '/messenger?chat=3' }}
              avatar="/images/chat_avatar.png"
            />
            <ChatItem
              link={{ href: '/messenger?chat=4' }}
              avatar="/images/chat_avatar.png"
            />
          </SimpleBar>
        </div>

        {chatParams.get('chat') ? (
          <Suspense>
            <PrivateChat />
          </Suspense>
        ) : (
          <FallbackView
            label="Select a dialog to start chatting"
            icon={<MessageSquare size={26} strokeWidth={1.5} />}
          />
        )}
      </Flex>
    </ViewLayout>
  )
}
