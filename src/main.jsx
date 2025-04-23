import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Car from "./work/Car"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car />
  </StrictMode>,
)
