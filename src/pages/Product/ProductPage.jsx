import React, { useState } from 'react'
import './ProductPage.css'
import { useEffect } from 'react'
import { findAllProducts, findByName } from '../../data/Products'
import { useForm } from '../../hooks/useForm'
import ModalProducto from './ModalProducto'
export default function ProductPage() {


  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [products, setProducts] = useState([])

  const { nombre, changeForm } = useForm({ "nombre": "" })

  useEffect(() => {
    const productos = findAllProducts()
    console.log(productos);
    // console.log(findByName("Leche"));

    setProducts(productos)



  }, [])




  const findProduct = () => {
    const newProducts = findByName(nombre)
    setProducts(newProducts)
  }

  return (
    <div>
      {/* <div className="select-sede">

        <label htmlFor="">Seleccionar Tienda de Filtro</label>
        <select>

          <option value="">Todos</option>
          <option value="">Callao 01</option>
          <option value="">Callao 02</option>
        </select>

      </div> */}

      <ModalProducto showModal={showModal} closeModal={closeModal}/>

      <div className="find-products">
        <button className='add' onClick={()=>openModal()} >
          <img src='./assets/add-button.png' />

        </button>
        <input type="text" name='nombre' value={nombre} onChange={changeForm} style={{ display: showModal ? 'none' : 'block' }}  />
        <button className='find' onClick={findProduct}>
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
              <th>Descripcion</th>
            </tr>

          </thead>
          <tbody>

            {

              products.map(({ id, nombre, marcas, descripcion }, i) => {
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{nombre}</td>
                    <th>{marcas}</th>
                    <td>{descripcion}</td>
                    {/* <td>Cantidad</td> */}
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
