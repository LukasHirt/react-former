import uniqueId from '@helpers/unique-id'
import cn from 'classnames'
import { handelize } from '../../../../src/utils/string'
import styles from './input.module.css'

export interface InputProps {
  type: string
  label: string
}

const Input: React.FC<InputProps> = ({ type, label, ...rest }) => {
  const id = uniqueId('input-')

  return (
    <div className={cn([styles.wrapper, styles[type]])}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} data-testid={'input-' + handelize(label)} className={styles.input} type={type} {...rest} />
    </div>
  )
}

export default Input
