import React from 'react'
import { useProductStore } from '../../store/productsStore'
import { useForm } from '../../hooks/useForm'

export default function ModalProducto({ showModal, closeModal }) {

    const product=useProductStore((state)=>state.products)
    const increment=useProductStore((state)=>state.incrementProduct)

    const {nombre,descripcion,marcas,precio, changeForm} =useForm({nombre:'',descripcion:'',marcas:"",precio:0})

    function addProduct() {
        increment({id:product[product.length-1].id+1,nombre,marcas,descripcion,precio:parseFloat(precio)})
        closeModal()
    }

    return (
        <>
            {showModal && (
                <div className="modal-page" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>Creacion de Producto</h2>
                        <div className="form-modal">

                            <div className="form-modal_Producto">

                                <label htmlFor="">Nombre</label>
                                <input name='nombre' value={nombre} onChange={changeForm} type="text" />
                            </div>
                            <div className="form-modal_Producto">

                                <label htmlFor="">Marca</label>
                                <input name='marcas' value={marcas} onChange={changeForm} type="text" />
                            </div>
                            <div className="form-modal_Producto">

                                <label htmlFor="">Descripcion</label>
                                <input name='descripcion' value={descripcion} onChange={changeForm} type="text" />
                            </div>
                            <div className="form-modal_Producto">

                                <label htmlFor="">Precio</label>
                                <input name='precio' value={precio} onChange={changeForm} type="number" />
                            </div>

                        </div>
                        <div className=" buttons">
                            <button onClick={closeModal}>cancelar</button>
                            <button onClick={()=>addProduct()}>agregar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
