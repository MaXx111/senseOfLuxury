import ReactDOM from 'react-dom/client'
import './App.css'
import { Provider as ReduxProvider } from 'react-redux'
import { setupStore } from './appStore'
import { MainPage } from '../pages/mainPage'

const appStore = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={appStore}>
    <MainPage />
  </ReduxProvider>
)
