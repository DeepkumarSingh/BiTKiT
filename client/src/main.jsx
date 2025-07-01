import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvide.jsx'
import { ConfigProvider } from "antd";
import {Provider} from "react-redux";
import store from "./redux/store.jsx";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
       <Provider store={store}>
          <ConfigProvider>
            <div className='dark:bg-slate-900 dark:text-white'>
              <App />
            </div>
          </ConfigProvider>
       </Provider>
    </AuthProvider>
    
  </BrowserRouter>
);
