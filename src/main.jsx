import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// NOTE : configure ther redux 
import { Provider } from 'react-redux'
import {store} from "./features/Blog/store.js"
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
