import { FC, useId, useState } from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { Flex } from '@/components/shared'

import styles from './checkbox-field.module.scss'

interface ICheckboxField {
  label: string
}

export const CheckboxField: FC<ICheckboxField> = ({ label }) => {
  const [checked, setChecked] = useState<boolean>(false)

  const labelId = useId()

  return (
    <Flex align="center" className={styles.box}>
      <div
        onClick={() => {
          setChecked(!checked)
        }}
        role="presentation"
        className={cn(styles.checkbox, {
          [styles.checked]: checked,
          [styles.unchecked]: !checked,
        })}
      >
        <AnimatePresence>
          {checked && (
            <motion.div
              initial={{ translateY: -10 }}
              animate={{ translateY: 0 }}
              exit={{
                translateY: -10,
                opacity: 0,
              }}
            >
              <IoCheckmarkOutline size={20} className={styles.icon} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <input
        id={labelId}
        type="checkbox"
        checked={checked}
        className={styles.defaultCheckbox}
      />

      <label
        htmlFor={labelId}
        className={styles.label}
        role="presentation"
        onClick={() => {
          setChecked(!checked)
        }}
      >
        {label}
      </label>
    </Flex>
  )
}
