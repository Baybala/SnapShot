import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PhotoContextProvider } from './Context/PhotoContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotoContextProvider>
        <App />
      </PhotoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
