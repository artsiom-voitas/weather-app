import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './components/Layout/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Layout>
        <App />
      </Layout>
    </NextUIProvider>
  </React.StrictMode>,
)
