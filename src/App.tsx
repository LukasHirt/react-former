import { useCallback, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Tabs, Tab, Button, DarkModeSwitch } from './components/common'
import { Container } from './components/layout'
import { TabConfig, TabResult } from './components/tabs'
import { FormConfigProvider } from './context/form-config'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('config')

  const scrollToEditor = useCallback(() => {
    document.querySelector('#form-editor')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <FormConfigProvider>
      <Container className="pt-40" Component="main">
        <section>
          <h1 className="text-7xl">Former</h1>
          <p className="text-xl mt-2">
            The fastest way to <strong>get forms done</strong>!
          </p>

          <Button className="mt-8" variant="primary" onClick={scrollToEditor}>
            Start Building
          </Button>
        </section>

        <Tabs id="form-editor" activeTab={activeTab} className="my-40" onSelect={setActiveTab}>
          <Tab name="config" title="Config">
            <TabConfig onSave={() => setActiveTab('result')} />
          </Tab>
          <Tab name="result" title="Result">
            <TabResult />
          </Tab>
        </Tabs>

        <footer className="py-4">
          <DarkModeSwitch />
        </footer>
      </Container>
      <ToastContainer />
    </FormConfigProvider>
  )
}

export default App
