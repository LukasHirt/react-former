import { Children, isValidElement, useMemo } from 'react'
import cn from 'classnames'
import { Card } from '@components/common'
import styles from './tabs.module.css'

interface TabsProps {
  activeTab: string
  children: React.ReactNode
  className?: string
  id?: string
  onSelect: (tab: string) => void
}

interface TabLinkProps {
  tab: React.ReactElement
  className?: string
  onClick: () => void
}

const TabLink: React.FC<TabLinkProps> = ({ tab, className, onClick }) => {
  const { title = 'Untitled' } = tab.props

  return (
    <button className={cn([styles.tabLink, className])} onClick={onClick}>
      {title}
    </button>
  )
}

const Tabs: React.FC<TabsProps> = ({ activeTab, children, className, onSelect, ...rest }) => {
  const tabs = useMemo((): React.ReactElement[] => {
    return (
      Children.map(children, (child) => {
        const isValid = isValidElement(child)

        if (isValid) return child

        console.error(new TypeError('invalid element passed as tab ' + child))

        return false
      })?.filter(Boolean) || []
    )
  }, [children])

  const activeTabElement = useMemo((): React.ReactElement | undefined => {
    return tabs.find((tab) => tab.props.name === activeTab)
  }, [activeTab, tabs])

  return (
    <div className={className} {...rest}>
      <nav className={styles.tabsNav}>
        {tabs.map((tab) => (
          <TabLink
            tab={tab}
            key={tab.props.name}
            className={cn({ [styles.active]: tab.props.name === activeTab })}
            onClick={() => onSelect(tab.props.name)}
          />
        ))}
      </nav>
      <Card className="rounded-tl-none p-4">{activeTabElement || tabs[0]}</Card>
    </div>
  )
}

export default Tabs
