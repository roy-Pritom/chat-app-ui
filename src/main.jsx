import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Route/Route';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="w-[378px] md:w-full mx-auto md:mx-0">

    <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>,
)
