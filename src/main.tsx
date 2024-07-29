import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouteProvider from './app/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider />
  </React.StrictMode>,
)
