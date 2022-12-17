import styles from './tab.module.css'

interface TabProps {
  target: string
  children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({ target, children }) => {
  return (
    <a className={styles.tab} href={target}>
      {children}
    </a>
  )
}

export default Tab
