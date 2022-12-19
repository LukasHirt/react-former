import { useCallback, useContext, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

import { bindJsonFormatterToTextarea } from '@helpers/format'

import { FormConfigContext } from '@context/form-config'

import { Button } from '@components/common'
import { Textarea } from '@components/form'

interface TabConfigProps {
  onSave: () => void
}

const TabConfig: React.FC<TabConfigProps> = ({ onSave }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const { formConfig, isUpdatingConfig, updateFormConfig } = useContext(FormConfigContext)

  const handle_submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (textareaRef.current === null) return

    try {
      updateFormConfig(textareaRef.current.value)
      onSave()
    } catch (error) {
      if (error instanceof Error || (error instanceof TypeError && error.cause)) {
        if (error.cause === 'invalid-json') {
          toast.error('Entered config is not a valid JSON format.')

          return
        }

        if (error.cause === 'missing-items-key') {
          toast.error('Items are missing.')

          return
        }

        if (error.cause === 'wrong-items-type') {
          toast.error('Type of "items" is not valid. Please, use an array.')

          return
        }

        if (error.cause === 'no-items') {
          toast.error('Items are empty.')

          return
        }
      }

      console.error(error)
      toast.error('Could not apply current config. Try it again later, please.')
    }
  }, [])

  useEffect(() => {
    if (textareaRef.current === null) return

    const formatter = bindJsonFormatterToTextarea(textareaRef.current)

    return function cleanup() {
      if (textareaRef.current === null) return

      formatter.removeListener()
    }
  }, [textareaRef])

  return (
    <section>
      <form onSubmit={handle_submit}>
        <Textarea
          ref={textareaRef}
          label="Form JSON"
          className="w-full block"
          defaultValue={JSON.stringify(formConfig, null, 2)}
          rows={40}
          srOnlyLabel
        />
        <Button disabled={isUpdatingConfig} type="submit" variant="primary" className="ml-auto mt-4 block">
          Apply
        </Button>
      </form>
    </section>
  )
}

export default TabConfig
