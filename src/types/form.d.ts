export interface FormItem {
  type: 'multi-line' | 'number' | 'string' | 'boolean' | 'enum' | 'date'
  label: string
}

export interface FormButton {
  label: string
  variant: 'primary' | 'secondary'
  type: 'submit' | 'reset' | 'button'
}

export interface FormConfig {
  title?: string
  theme?: 'light' | 'dark'
  items: FormItem[]
  buttons?: FormButton[]
}
