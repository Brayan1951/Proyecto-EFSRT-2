import React from 'react'
import './AlmacenPage.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllProdcutosAlmacen } from '../../data/Almacenes'
import { getByCodigo } from '../../data/Products'
export default function AlmacenPage() {

  const [productAlmacen, setProductAlmacen] = useState([])


  useEffect(() => {

    const productos_almacen = getAllProdcutosAlmacen()
    console.log(productos_almacen);
    setProductAlmacen(productos_almacen)
        
  }, [])


  return (
    <div>
      <div className="select-sede">

        <label htmlFor="">Seleccionar Tienda de Filtro</label>
        <select>

          <option value="">Todos</option>
          <option value="">Callao 01</option>
          <option value="">Callao 02</option>
        </select>

      </div>
      <div className="find-products">
        {/* <button className='add'>
          <img src='./assets/add-button.png'/>
          
        </button> */}
        <input type="text" />
        <button className='find'>
          <img src='./assets/find.png' />
        </button>
      </div>

      <div className="table-list">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>tienda</th>
              <th>Cantidad</th>
            </tr>

          </thead>
          <tbody>

            {
              productAlmacen.map(({id_almacen,id_producto,cantidad},id) => {
                return (

                  <tr key={id}>
                  <td>{id_producto}</td>
                  <td>{getByCodigo(id_producto).nombre}</td>
                  <td>{getByCodigo(id_producto).marcas}</td>
                  <td>{id_almacen}</td>
                  <td>{cantidad}</td>
                </tr>
                )
              })
            }





          </tbody>
        </table>
      </div>



    </div>
  )
}
