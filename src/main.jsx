import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CoinContextProver from './Components/CoinContext/CoinContext.jsx'


createRoot(document.getElementById('root')).render(
  <CoinContextProver>
<StrictMode>
    <App />
  </StrictMode>,
  </CoinContextProver>
  
)
