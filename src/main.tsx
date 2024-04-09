import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './homePage.tsx'
import Sluzby from './Sluzby.tsx';
import Onas from './Onas.tsx';
import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  },
  {
    path: '/Sluzby',
    element: <Sluzby />,
  },
  {
    path: '/O-nas',
    element: <Onas />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
