import { useContext } from 'react'
import { FormConfigContext } from '@context/form-config'
import { Block } from '@components/common'

const TabResult: React.FC = () => {
  const { formConfig } = useContext(FormConfigContext)

  return (
    <div>
      {!!formConfig.title && <h1>{formConfig.title}</h1>}
      {formConfig.items.map((item, index) => (
        <Block type={item.type} key={index} />
      ))}
    </div>
  )
}

export default TabResult
