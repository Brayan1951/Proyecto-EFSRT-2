import React from 'react'
import './AlmacenPage.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useAlmacenStore } from '../../store/AlmacenStore'
import { useProductStore } from '../../store/productsStore'
import { useForm } from '../../hooks/useForm'
import { Almacenes, almacenes_productos } from '../../assets/data'



export default function AlmacenPage() {

  const [productAlmacen, setProductAlmacen] = useState([])
  const { almacen_producto, filterAlmacen, getbyAlmacen } = useAlmacenStore()
  const { products } = useProductStore()
  const [almacenes, setAlmacenes] = useState([])
  const { almacen, nombre, changeForm } = useForm({ almacen: 0, nombre: "" })


  const displayAlmacenProduct = filterAlmacen.length > 0 ? filterAlmacen : almacen_producto;



  function getCodigoProducto(codigo) {
    return products.filter(val => val.id === codigo)[0]
  }


  useEffect(() => {
    setProductAlmacen(almacen_producto)
  }, [])
  useEffect(() => {
    setAlmacenes( Almacenes )

  }, [])


  useEffect(() => {
    if (filterAlmacen.length > 0) {
      
      setProductAlmacen(displayAlmacenProduct)
    }
    
  }, [filterAlmacen])
  

  function FilterData() {
    getbyAlmacen(parseInt(almacen), parseInt(nombre))
    
  }


  return (
    <div>
      <div className="select-sede">

        <label htmlFor="">Seleccionar Tienda de Filtro</label>
        <select name='almacen' onChange={changeForm} value={almacen}>

          <option value={0}>Todos</option>
          {
            almacenes.map(({ id, nombre }) => {
              return <option value={id} key={id}>{nombre}</option>

            })
          }

        </select>

      </div>
      <div className="find-products">
        {/* <button className='add'>
          <img src='./assets/add-button.png'/>
          
        </button> */}
        <input type="text" name='nombre' value={nombre} onChange={changeForm} />
        <button className='find' onClick={() => FilterData()}>
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
              productAlmacen.map(({ id_almacen, id_producto, cantidad }, id) => {
                return (

                  <tr key={id}>
                    <td>{id_producto}</td>
                    <td>{getCodigoProducto(id_producto).nombre}</td>
                    <td>{getCodigoProducto(id_producto).marcas}</td>
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
