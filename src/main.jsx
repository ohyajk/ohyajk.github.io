import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PopContextProvider } from './context/PopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopContextProvider>
      <App />
    </PopContextProvider>

  </React.StrictMode>,
)
