import React from 'react'
import './Traslate.css'


export default function TraslatePage() {
  return (
    <div>
      
      <div className="select-sede">

        <label htmlFor="">Motivo de Guia</label>
        <select>

          <option value="">Traslado entre almacenes</option>
          <option value="">Siniestro / perdida de mercaderia</option>
          <option value="">Entrada de Mercaderia</option>
        </select>

      </div>
      <div className="select-sede">

        <label htmlFor="">Desde la Tienda</label>
        <select>

          <option value="">Todos</option>
          <option value="">Callao 01</option>
          <option value="">Callao 02</option>
        </select>

      </div>
      <div className="select-sede">

        <label htmlFor="">Hasta la Tienda</label>
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
              <th>Tienda</th>
              <th>Stock Disponible</th>
              <th>Funcion</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td>10001</td>
              <td>Leche Gloria 1L</td>
              <th>20001</th>
              <td>5</td>
              <td>
                <button>seleccionar</button>
              </td>
            </tr>
            <tr>
              <td>10001</td>
              <td>Leche Gloria 2.5L</td>
              <th>20001</th>
              <td>15</td>
              <td>
                <button>seleccionar</button>
              </td>
            </tr>


          </tbody>
        </table>
      </div>



    </div>
  )
}
