import { useContext } from 'react'
import { FormConfigContext } from '@context/form-config'
import { Block, Button } from '@components/common'
import styles from './result.module.css'

const TabResult: React.FC = () => {
  const { formConfig } = useContext(FormConfigContext)

  return (
    <div>
      {!!formConfig.title && <h1>{formConfig.title}</h1>}

      {formConfig.items.map((item, index) => (
        <Block type={item.type} key={index} />
      ))}

      {Array.isArray(formConfig.buttons) && formConfig.buttons.length > 0 && (
        <div className={styles.formButtons}>
          {formConfig.buttons.map((item) => (
            <Button key={item.label} variant={item.variant} type={item.type}>
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default TabResult
