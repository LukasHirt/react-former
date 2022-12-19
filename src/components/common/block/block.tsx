import { createElement } from 'react'
import { Input, Textarea } from '@components/form'
import { FormItem } from 'src/types/form'
import { getInputType } from '@helpers/form'
import { InputProps } from '@components/form/input/input'
import { TextareaProps } from '@components/form/textarea/textarea'

interface FormElementProps {
  label: string
  type?: string
}

const Components = Object.freeze({
  string: Input,
  'multi-line': Textarea,
  number: Input,
  boolean: Input,
  enum: Input,
  date: Input
})

const Block: React.FC<FormItem> = ({ type, ...rest }) => {
  const props: FormElementProps = rest

  if (type !== 'multi-line') {
    props.type = getInputType(type)
  }

  if (typeof Components[type] !== 'undefined') {
    return createElement(Components[type] as React.FC<InputProps | TextareaProps>, props)
  }

  return <div {...rest}>Unknown type</div>
}

export default Block
