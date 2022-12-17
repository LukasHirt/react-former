import { forwardRef } from 'react'
import cn from 'classnames'
import styles from './textarea.module.css'

interface TextareaProps {
  className?: string
  value?: string
  defaultValue?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, value, defaultValue },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={cn([styles.textarea, className])}
      value={value}
      defaultValue={defaultValue}
      rows={20}
    />
  )
})

export default Textarea
