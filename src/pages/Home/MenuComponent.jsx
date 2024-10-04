import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function MenuComponent() {
    return (
        <nav>
            {/* <p>Holas</p> */}
            <div className="lista-menu">
                
            <NavLink to={'product'} className={({ isActive }) => isActive ? "active" : ""}  >
                Producto
            </NavLink>
            <NavLink to={'almacen'} className={({ isActive }) => isActive ? "active" : ""}  >
                Almacen
            </NavLink>

            <NavLink to={'traslate'} className={({ isActive }) => isActive ? "active" : ""}  >
                Traslado
            </NavLink>
            </div>
        </nav>
    )
}
