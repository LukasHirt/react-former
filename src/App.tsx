import { Tabs, Tab } from './components/common'
import { Container } from './components/layout'
import { TabConfig, TabResult } from './components/tabs'
import { FormConfigProvider } from './context/form-config'

const App: React.FC = () => {
  return (
    <FormConfigProvider>
      <Container className="mt-40" Component="main">
        <Tabs>
          <Tab name="config" title="Config">
            <TabConfig />
          </Tab>
          <Tab name="result" title="Result">
            <TabResult />
          </Tab>
        </Tabs>
      </Container>
    </FormConfigProvider>
  )
}

export default App
