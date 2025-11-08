import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import Routes from './routes/Routes.jsx';
import { Context } from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={Routes}></RouterProvider>
    </Context>
  </StrictMode>,
)
