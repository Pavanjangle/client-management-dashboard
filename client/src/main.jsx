import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS withBorderStyle> 
    <App />
    </MantineProvider>
  </StrictMode>,
)
