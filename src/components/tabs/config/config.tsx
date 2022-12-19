import { useCallback, useContext, useEffect, useRef } from 'react'

import { FormConfigContext } from '@context/form-config'

import { Button } from '@components/common'
import { Textarea } from '@components/form'
import { bindJsonFormatterToTextarea } from '@helpers/format'

const TabConfig: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const { formConfig, setFormConfig } = useContext(FormConfigContext)

  const handle_submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (textareaRef.current === null) return

    setFormConfig(JSON.parse(textareaRef.current.value))
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
        <Textarea ref={textareaRef} className="w-full block" defaultValue={JSON.stringify(formConfig, null, 2)} />
        <Button type="submit" variant="primary" className="ml-auto mt-4 block">
          Apply
        </Button>
      </form>
    </section>
  )
}

export default TabConfig
