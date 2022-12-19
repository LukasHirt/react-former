import { forwardRef } from 'react'
import cn from 'classnames'
import styles from './textarea.module.css'
import uniqueId from '@helpers/unique-id'

export interface TextareaProps {
  className?: string
  value?: string
  defaultValue?: string
  label?: string
  rows?: number
  srOnlyLabel?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, value, defaultValue, label, rows, srOnlyLabel = false },
  ref
) {
  const id = uniqueId('textarea-')

  return (
    <div className={cn({ [styles.wrapper]: label && !srOnlyLabel })}>
      {label && (
        <label className={cn([{ 'sr-only': srOnlyLabel }, styles.label])} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        ref={ref}
        className={cn([styles.textarea, className])}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
      />
    </div>
  )
})

export default Textarea
