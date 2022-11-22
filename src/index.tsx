import { createRoot } from 'react-dom/client'
import App from '@/container/App/App'
import './common/styles/app.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { AppProvider } from './providers'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
  <AppProvider>
    <App />
  </AppProvider>
)
