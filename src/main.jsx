import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LaunchScreen from './LaunchScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LaunchScreen targetDate="2026-08-23T08:12:00+05:30">
      <App />
    </LaunchScreen>
  </StrictMode>,
)
