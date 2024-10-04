import React from 'react'
import { Outlet } from 'react-router-dom'

import MenuComponent from './MenuComponent'
import './HomePage.css'


export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="menu">
        <MenuComponent />

      </div>
      <div className="page">

        <Outlet />
      </div>
    </div>
  )
}
