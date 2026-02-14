import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'


import { PageProvider } from './context/useContext';

// Import Manrope weights
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PageProvider>
    <App />
    </PageProvider>
    </BrowserRouter>
  </StrictMode>,
)
