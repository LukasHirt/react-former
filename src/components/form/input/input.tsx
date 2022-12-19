import uniqueId from '@helpers/unique-id'
import cn from 'classnames'
import styles from './input.module.css'

export interface InputProps {
  type: string
  label: string
}

const Input: React.FC<InputProps> = ({ type, label }) => {
  const id = uniqueId('input-')

  return (
    <div className={cn([styles.wrapper, styles[type]])}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} className={styles.input} type={type} />
    </div>
  )
}

export default Input
