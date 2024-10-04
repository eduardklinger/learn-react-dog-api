import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RandomDogImage from './RandomDogImage.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RandomDogImage />
  </StrictMode>,
)
