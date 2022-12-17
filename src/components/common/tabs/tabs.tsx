import { Children, isValidElement, useMemo, useState } from 'react'
import { Card } from '@components/common'
import styles from './tabs.module.css'

interface TabsProps {
  children: React.ReactNode
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

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<React.ReactElement | null>(null)
  const [tabs, setTabs] = useState<React.ReactElement[]>([])

  useMemo(() => {
    setTabs(
      Children.map(children, (child) => {
        const isValid = isValidElement(child)

        if (isValid) return child

        console.error(new TypeError('invalid element passed as tab ' + child))

        return false
      })?.filter(Boolean) || []
    )

    if (tabs.length > 0) {
      setActiveTab(tabs[0])
    }
  }, [children])

  return (
    <div>
      <nav className={styles.tabsNav}>
        {tabs.map((tab) => (
          <TabLink tab={tab} key={tab.props.name} onClick={() => setActiveTab(tab)} />
        ))}
      </nav>
      <Card className="rounded-t-none">{activeTab || tabs[0]}</Card>
    </div>
  )
}

export default Tabs
