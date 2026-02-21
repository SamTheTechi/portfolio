import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConsoleLog } from './components/ConsoleLog.ts'
import './index.css'
import App from './App.tsx'

ConsoleLog()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
