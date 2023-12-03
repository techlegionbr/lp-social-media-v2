import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './styles/components/GlobalStyles.tsx'
import { ThemeProviderTrated } from './contexts/ThemeContext/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderTrated>
      <GlobalStyles />
      <App />
    </ThemeProviderTrated>
  </React.StrictMode>,
)
