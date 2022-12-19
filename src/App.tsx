import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Tabs, Tab } from './components/common'
import { Container } from './components/layout'
import { TabConfig, TabResult } from './components/tabs'
import { FormConfigProvider } from './context/form-config'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('config')

  return (
    <FormConfigProvider>
      <Container className="mt-40" Component="main">
        <section>
          <h1>Former</h1>
          <p>The fastest way to get forms done!</p>
        </section>

        <Tabs activeTab={activeTab} onSelect={setActiveTab}>
          <Tab name="config" title="Config">
            <TabConfig onSave={() => setActiveTab('result')} />
          </Tab>
          <Tab name="result" title="Result">
            <TabResult />
          </Tab>
        </Tabs>
      </Container>
      <ToastContainer />
    </FormConfigProvider>
  )
}

export default App
