import { useCallback, useContext, useRef } from 'react'

import { FormConfigContext } from '@context/form-config'

import { Button } from '@components/common'
import { Textarea } from '@components/form'

const defaultValue = {
  theme: 'light',
  items: []
}

const TabConfig: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const { setFormConfig } = useContext(FormConfigContext)

  const handle_submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (textareaRef.current === null) return

    setFormConfig(JSON.parse(textareaRef.current.value))
  }, [])

  return (
    <section>
      <form onSubmit={handle_submit}>
        <Textarea ref={textareaRef} className="w-full block" defaultValue={JSON.stringify(defaultValue, null, 2)} />
        <Button type="submit" variant="primary" className="ml-auto mt-4 block">
          Apply
        </Button>
      </form>
    </section>
  )
}

export default TabConfig
