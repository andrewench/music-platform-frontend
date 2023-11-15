import { Check } from 'lucide-react'
import { ChangeEvent, FC, useId, useState } from 'react'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { Flex } from '@/components/shared'

import styles from './checkbox-field.module.scss'

interface ICheckboxField {
  label: string
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
}

export const CheckboxField: FC<ICheckboxField> = ({ label, onChange }) => {
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
              <Check size={20} strokeWidth={1.5} className={styles.icon} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <input
        id={labelId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
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
