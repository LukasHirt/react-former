import { createElement } from 'react'
import { Input, Textarea } from '@components/form'
import { FormItem } from 'src/types/form'

const Components = Object.freeze({
  string: () => Input({ type: 'text' }),
  'multi-line': Textarea,
  number: () => Input({ type: 'number' }),
  boolean: () => Input({ type: 'checkbox' }),
  enum: () => Input({ type: 'radio' }),
  date: () => Input({ type: 'date' })
})

const Block: React.FC<FormItem> = ({ type }) => {
  if (typeof Components[type] !== 'undefined') {
    return createElement(Components[type])
  }

  return <div>Unknown type</div>
}

export default Block
