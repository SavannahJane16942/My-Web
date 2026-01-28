import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../style/index.css'
import App from './App.jsx'
import TopNav from './topNav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <TopNav />
      <App />
    </main>
  </StrictMode>
)
