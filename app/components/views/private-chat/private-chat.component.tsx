import { FC } from 'react'
import { IoArrowBackOutline, IoPaperPlaneSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'

import { MessageItem, PrimaryButton } from '@/components/ui'

import { Flex } from '@/components/shared'

import { useMultipleSelector } from '@/shared/hooks'

import styles from './private-chat.module.scss'

export const PrivateChat: FC = () => {
  const {
    app: { sideBar },
  } = useMultipleSelector()

  return (
    <div
      className={cn(styles.messengerBox, {
        [styles.opened]: sideBar.isOpen,
        [styles.closed]: !sideBar.isOpen,
      })}
    >
      <Flex align="center" content="start" className={styles.caption}>
        <Link to="/messenger" className={styles.backLink}>
          <IoArrowBackOutline size={20} />
        </Link>

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
  )
}
