import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Route/Route';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="w-[378px] md:w-full mx-auto md:mx-0">

        <RouterProvider router={router} />
      </div>
    </AuthProvider>

  </React.StrictMode>,
)
