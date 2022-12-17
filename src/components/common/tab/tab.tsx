interface TabProps {
  children: React.ReactNode
  name: string
  title?: string
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab
