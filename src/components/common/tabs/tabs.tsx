import { Children, isValidElement, useMemo, useState } from 'react'
import { Card } from '@components/common'
import styles from './tabs.module.css'

interface TabsProps {
  activeTab: string
  children: React.ReactNode
  onSelect: (tab: string) => void
}

interface TabLinkProps {
  tab: React.ReactElement
  onClick: () => void
}

const TabLink: React.FC<TabLinkProps> = ({ tab, onClick }) => {
  const { title = 'Untitled' } = tab.props

  return (
    <button className={styles.tabLink} onClick={onClick}>
      {title}
    </button>
  )
}

const Tabs: React.FC<TabsProps> = ({ activeTab, children, onSelect }) => {
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
    <div>
      <nav className={styles.tabsNav}>
        {tabs.map((tab) => (
          <TabLink tab={tab} key={tab.props.name} onClick={() => onSelect(tab.props.name)} />
        ))}
      </nav>
      <Card className="rounded-t-none">{activeTabElement || tabs[0]}</Card>
    </div>
  )
}

export default Tabs
