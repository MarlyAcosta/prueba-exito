import { AppProvider } from './context/AppProvider'
import { AppRouter } from './AppRouter'

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
