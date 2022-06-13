import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout'
import Home from './components/pages/home/Home'
import Routes from './components/routes/Routes'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Routes />
    <Home />
  </React.StrictMode>
)
