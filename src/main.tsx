import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './providers/UserProvider'

import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <ToastContainer />
      <App />
    </UserProvider>
  </StrictMode>
)
