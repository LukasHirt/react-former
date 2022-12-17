import { createContext, useEffect, useState } from 'react'
import { FormItem } from 'src/types/form'

interface FormConfig {
  title?: string
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

const defaultValues: FormConfig = { title: '', theme: 'light', items: [] }

export const FormConfigContext = createContext<FormConfigContextInterface>({
  formConfig: defaultValues,
  setFormConfig: () => undefined
})

export const FormConfigProvider: React.FC<FormConfigContextProvider> = ({ children }) => {
  const [formConfig, setFormConfig] = useState<FormConfig>(defaultValues)

  useEffect(() => {
    console.log(formConfig)
  }, [formConfig])

  return <FormConfigContext.Provider value={{ formConfig, setFormConfig }}>{children}</FormConfigContext.Provider>
}
