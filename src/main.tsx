import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CardProvider } from './contexts/CardContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  // </React.StrictMode>
)
