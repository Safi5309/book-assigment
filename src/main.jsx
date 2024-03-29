import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import BookDetails from './component/BookDetails.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
import OneBookDetails from './Pages/OneBookDetails.jsx'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        loader: () => fetch('data.json'),
        element: <Home></Home>,
      },
      {
        path: '/bookdetails/0',
        loader: () => fetch('data.json'),  
        element: <BookDetails></BookDetails>
      },
      {
        path: '/:id',
        loader: () => fetch('data.json'),
        element: <OneBookDetails />
      },
      {
        path: '/:id',
        loader: () => fetch('data.json'),
        element: <OneBookDetails />
      }

       
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
