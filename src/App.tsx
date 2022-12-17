import { Tabs, Tab } from './components/common'
import { Container } from './components/layout'
import { TabConfig } from './components/tabs'
import { FormConfigProvider } from './context/form-config'

const App: React.FC = () => {
  return (
    <FormConfigProvider>
      <Container className="mt-40" Component="main">
        <Tabs>
          <Tab name="config" title="Config">
            <TabConfig />
          </Tab>
        </Tabs>
      </Container>
    </FormConfigProvider>
  )
}

export default App
