import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Routers'
import { Toaster } from 'react-hot-toast'
import {  HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

   <HelmetProvider>
    
   <Toaster position='top-right' reverseOrder={false}/>
    <RouterProvider router={router}>
        

        </RouterProvider>
   </HelmetProvider>
   
    </AuthProvider>
   
  </StrictMode>,
)
