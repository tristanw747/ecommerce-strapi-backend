import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/", 
    element:<span>Home</span>
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;