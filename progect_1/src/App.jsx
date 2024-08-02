
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'
import Home from './componants/Home/Home'
import About from './componants/About/About'
import Port from './componants/Port/Port'
import Contact from './componants/Contact/Contact'
import LayOut from './componants/LayOut/LayOut'
import NootFound from './componants/NootFound/NootFound'


let router = createBrowserRouter([
  {
    path: '', element: <LayOut />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'port', element: <Port /> },
      { path: 'Contact', element: <Contact /> },
      { path: '*', element: <NootFound /> }
    ]
  }


])

function App() {
  return <RouterProvider router={router}></RouterProvider>

}

export default App
