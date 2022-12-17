import { createContext, useEffect, useState } from 'react'

interface FormItem {
  type:
    | 'text'
    | 'number'
    | 'file'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'password'
    | 'radio'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
    | 'range'
}

interface FormConfig {
  theme?: 'light' | 'dark'
  items: FormItem[]
}

export interface FormConfigContextInterface {
  formConfig: FormConfig
  setFormConfig: React.Dispatch<React.SetStateAction<FormConfig>>
}

interface FormConfigContextProvider {
  children: React.ReactNode
}

export const FormConfigContext = createContext<FormConfigContextInterface>({
  formConfig: { items: [] },
  setFormConfig: () => undefined
})

export const FormConfigProvider: React.FC<FormConfigContextProvider> = ({ children }) => {
  const [formConfig, setFormConfig] = useState<FormConfig>({ items: [] })

  useEffect(() => {
    console.log(formConfig)
  }, [formConfig])

  return <FormConfigContext.Provider value={{ formConfig, setFormConfig }}>{children}</FormConfigContext.Provider>
}
