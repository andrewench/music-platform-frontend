import { FC } from 'react'
import { IoPaperPlaneSharp } from 'react-icons/io5'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'

import { ViewLayout } from '@/components/layout'

import { ChatItem, MessageItem, PrimaryButton } from '@/components/ui'

import { Flex } from '@/components/shared'

import { app } from '@/store/slices'

import { useAppSelector } from '@/shared/hooks'

import styles from './messenger.module.scss'

export const MessengerView: FC = () => {
  const { sideBar } = useAppSelector(app)

  return (
    <ViewLayout>
      <Flex className={styles.box}>
        <div>
          <div className={styles.searchBarBox}>
            <input placeholder="Search" className={styles.searchBar} />
          </div>

          <SimpleBar className={styles.chatsBox}>
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
            <ChatItem avatar="/images/chat_avatar.png" />
          </SimpleBar>
        </div>

        <div
          className={cn(styles.messengerBox, {
            [styles.opened]: sideBar.isOpen,
            [styles.closed]: !sideBar.isOpen,
          })}
        >
          <Flex align="center" content="center" className={styles.caption}>
            <p className={styles.username}>Ann Roberts</p>
          </Flex>

          <SimpleBar className={styles.messenger}>
            <Flex direction="column">
              <MessageItem message="Lorem ipsum, dolor sit" />
              <MessageItem message="Lorem dignissimos earum perspiciatis, ad ipsa doloribus tempore qui." />
              <MessageItem message="Lorem ipsum dolor sit amet consectetur elit." />
              <MessageItem message="met consectetur adipisicing elit. Aliquam corrupti ea illo? Dolorem error nobis iste quia voluptatem ipsam, vero distinctio reiciendis et" />
              <MessageItem message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus voluptatum illum debitis cupiditate aut minima pariatur tenetur vel nostrum, assumenda cum" />
              <MessageItem message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, asperiores. Molestias laudantium obcaecati nemo. Neque minima animi deleniti, error pariatur provident doloremque, dignissimos earum perspiciatis, ad ipsa doloribus tempore qui." />
              <MessageItem message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil laboriosam dolorum optio excepturi sunt ullam nisi quas! Hic cumque animi debitis obcaecati eos consequuntur earum nesciunt doloremque nisi ipsa." />
              <MessageItem message="Lorem ipsum" />
              <MessageItem message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus voluptatum illum debitis cupiditate aut minima pariatur tenetur vel nostrum, assumenda cum sapiente ad provident in quis laboriosam, rerum omnis? Rerum?" />
              <MessageItem message="Lorem ipsum. Neque minima animi deleniti, error pariatur provident doloremque, dignissimos earum perspiciatis, ad ipsa doloribus tempore qui." />
              <MessageItem message="Lorem ipsum." />
              <MessageItem message="Lorem ipsum. Dolorem error nobis iste quia voluptatem ipsam, vero distinctio reiciendis et tempore laboriosam nulla maiores, aspernatur tenetur minima!" />
            </Flex>
          </SimpleBar>

          <Flex className={styles.inputBox}>
            <input placeholder="Enter something..." className={styles.input} />

            <PrimaryButton type="button" className={styles.submit}>
              <IoPaperPlaneSharp size={16} />
            </PrimaryButton>
          </Flex>
        </div>
      </Flex>
    </ViewLayout>
  )
}
