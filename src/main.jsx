import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LaunchScreen from './LaunchScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LaunchScreen targetDate={new Date(Date.now() + 60000).toISOString()}>
      <App />
    </LaunchScreen>
  </StrictMode>,
)
