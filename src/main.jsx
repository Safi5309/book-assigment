import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import BookDetails from './component/BookDetails.jsx'
import MainLayouts from './layouts/MainLayouts.jsx'
const router = createBrowserRouter([
  {path:'/',
   element:<MainLayouts></MainLayouts>,
   children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/bookdetails/0',
      element:<BookDetails></BookDetails>
    },
   ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
