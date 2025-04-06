import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
