import { createContext, useCallback, useEffect, useState } from 'react'
import { FormConfig } from 'src/types/form'

export interface FormConfigContextInterface {
  formConfig: FormConfig
  isUpdatingConfig: boolean
  updateFormConfig: (json: string) => void
}

interface FormConfigContextProvider {
  children: React.ReactNode
  onSave?: () => void
}

const defaultValues: FormConfig = { title: '', theme: 'light', items: [], buttons: [] }

export const FormConfigContext = createContext<FormConfigContextInterface>({
  formConfig: defaultValues,
  isUpdatingConfig: false,
  updateFormConfig: () => undefined
})

export const FormConfigProvider: React.FC<FormConfigContextProvider> = ({ children }) => {
  const [formConfig, setFormConfig] = useState<FormConfig>(defaultValues)
  const [isUpdatingConfig, setIsUpdatingConfig] = useState<boolean>(false)

  const updateFormConfig = useCallback((json: string) => {
    setIsUpdatingConfig(true)

    let config: FormConfig

    try {
      config = JSON.parse(json)
    } catch (error) {
      setIsUpdatingConfig(false)
      throw new Error(error as string, { cause: 'invalid-json' })
    }

    if (!Object.hasOwn(config, 'items')) {
      setIsUpdatingConfig(false)
      throw new Error('Missing items key' as string, { cause: 'missing-items-key' })
    }

    if (!Array.isArray(config.items)) {
      setIsUpdatingConfig(false)
      throw new TypeError('config.items is not an array', { cause: 'wrong-items-type' })
    }

    if (config.items.length < 1) {
      setIsUpdatingConfig(false)
      throw new Error('No items found', { cause: 'no-items' })
    }

    setFormConfig(config)
  }, [])

  useEffect(() => {
    setIsUpdatingConfig(false)
  }, [formConfig])

  return (
    <FormConfigContext.Provider value={{ formConfig, isUpdatingConfig, updateFormConfig }}>
      {children}
    </FormConfigContext.Provider>
  )
}
