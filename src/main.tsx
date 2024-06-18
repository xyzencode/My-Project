import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/global.css'

// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(() => import('./App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
