import { Fragment, useContext } from 'react'
import cn from 'classnames'
import { FormConfigContext } from '@context/form-config'
import { Block, Button } from '@components/common'
import styles from './result.module.css'

const TabResult: React.FC = () => {
  const { formConfig } = useContext(FormConfigContext)
  const theme = formConfig.theme || 'light'

  return (
    <div data-testid="tab-result" className={cn([styles.tab, 'theme-' + theme])}>
      {formConfig.items?.length > 0 ? (
        <Fragment key="rendered-form">
          {!!formConfig.title && <h1 className={cn(['mb-4', styles.formTitle])}>{formConfig.title}</h1>}

          <div className={styles.formFields}>
            {formConfig.items.map((item, index) => (
              <Block key={index} {...item} />
            ))}
          </div>

          {Array.isArray(formConfig.buttons) && formConfig.buttons.length > 0 && (
            <div className={cn([styles.formButtons, 'mt-8'])}>
              {formConfig.buttons.map((item) => (
                <Button key={item.label} variant={item.variant} type={item.type}>
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </Fragment>
      ) : (
        <p key="no-items-msg" className={styles.noItemsMsg}>
          You have not created any form yet. Please, go back to section &rdquo;Config&rdquo; and create one.
        </p>
      )}
    </div>
  )
}

export default TabResult
