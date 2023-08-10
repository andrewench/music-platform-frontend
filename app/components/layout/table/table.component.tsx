import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

import styles from './table.module.scss'

interface ITable {
  head: string[]
  content: Array<Record<string, string | number>>
}

export const Table: FC<PropsWithClassName<ITable>> = ({
  head,
  content,
  className,
}) => {
  return (
    <table className={cn(styles.table, className)}>
      <thead>
        <tr>
          {head.map((item, idx) => (
            <th className={cn(styles.cell, styles.headCell)} key={idx}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.map((item, idx) => (
          <tr className={styles.row} key={idx}>
            {Object.values(item).map((cell, cellIdx) => (
              <td className={styles.cell} key={cellIdx}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
