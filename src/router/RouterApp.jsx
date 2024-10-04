import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AlmacenPage, HomePage ,ProductPage, TraslatePage} from '../pages'

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
        children:[
            {
                path:'product',
                element:<ProductPage/>
            },
            {
                path:'almacen',
                element:<AlmacenPage/>
            },
            {
                path:'traslate',
                element:<TraslatePage/>
            },
        ]
    }
])


export default function RouterApp() {
  return <RouterProvider router={router}/>
}
