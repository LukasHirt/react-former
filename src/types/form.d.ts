export interface FormItem {
  type: 'multi-line' | 'number' | 'string' | 'boolean' | 'enum' | 'date'
}

export interface FormButton {
  label: string
  variant: 'primary' | 'secondary' | 'outline'
  type: 'submit' | 'reset' | 'button'
}

export interface FormConfig {
  title?: string
  theme?: 'light' | 'dark'
  items: FormItem[]
  buttons?: FormButton[]
}
