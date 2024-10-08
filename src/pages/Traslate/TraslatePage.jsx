import React, { useEffect, useState } from 'react'
import './Traslate.css'
import ModalTraslate from './ModalTraslate'
import { useForm } from '../../hooks/useForm'
import { Almacenes } from '../../assets/data'
import { useAlmacenStore } from '../../store/AlmacenStore'
import { useProductStore } from '../../store/productsStore'


export default function TraslatePage() {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const {opcion, almacen1, almacen2, nombre, changeForm } = useForm({ opcion:0, almacen1: 20001, almacen2: 20002, nombre: "" })

  const [productSelect, setProductSelect] = useState({id:0,nombre:''})
  const { products } = useProductStore()

  const [productsData, setProducts] = useState([])
  const [almacenes, setAlmacenes] = useState([])


  useEffect(() => {
    setAlmacenes(Almacenes)

  }, [])

  useEffect(() => {
    setProducts(products)
  }, [])

  const SeleccionModal=(id,nombre)=>{
    setProductSelect({id,nombre})
    openModal()


  }


  return (
    <div>
      <ModalTraslate showModal={showModal} closeModal={closeModal} productSelect={productSelect} almacen={almacen1} opcion={opcion}/>

      <div className="select-sede">

        <label htmlFor="">Motivo de Guia</label>
        <select value={opcion} onChange={changeForm} name='opcion'>

          <option value={0}>Traslado entre almacenes</option>
          <option value={1}>Siniestro / perdida de mercaderia</option>
          <option value={2}>Entrada de Mercaderia</option>
        </select>

      </div>
      <div className="select-sede">

        <label htmlFor="">Desde la Tienda</label>
        <select name='almacen1' onChange={changeForm} value={almacen1}>

          {
            almacenes.map(({ id, nombre }) => {
              return <option value={id} key={id}>{id} - {nombre}</option>

            })
          }
        </select>

      </div>
      <div className="select-sede">

        <label htmlFor="">Hasta la Tienda</label>
        <select name='almacen2' onChange={changeForm} value={almacen2}>

          {
            almacenes.map(({ id, nombre }) => {
              return <option value={id} key={id}>{id} - {nombre}</option>

            })
          }
        </select>

      </div>
      <div className="find-products">
        {/* <button className='add'>
        <img src='./assets/add-button.png'/>
        
      </button> */}
        <input type="text" style={{ display: showModal ? 'none' : 'block' }} />
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
              <th>Funcion</th>
            </tr>

          </thead>
          <tbody>
            {
              productsData.map(({ id, nombre }, key) => (
                <tr key={key}>
                  <td>{id}</td>
                  <td>{nombre}</td>
                  <td>
                    <button onClick={() => SeleccionModal(id,nombre)} >seleccionar</button>
                  </td>
                </tr>
              ))
            }




          </tbody>
        </table>
      </div>



    </div >
  )
}
