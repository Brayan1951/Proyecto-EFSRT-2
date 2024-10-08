import React from 'react'
import { useAlmacenStore } from '../../store/AlmacenStore';

export default function ModalTraslate({ showModal, closeModal, productSelect,almacen,opcion }) {


    const { almacen_producto } = useAlmacenStore()

    const { id, nombre } = productSelect

    function ObtenerStock() {
        
        const filt=almacen_producto.filter((val)=>(val.id_producto===parseInt(id) && val.id_almacen===parseInt(almacen)))
        if (filt.length>0) {
            
            return filt[0].cantidad
        }
        return 0
        
        
    }
    
    
    const Traslate=()=> {
        console.log(opcion);
        

        
    }

    return (
        <>
            {
                (showModal) && (

                    <div className='modal-page' onClick={closeModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <div className="form_modal">
                                <div className="form-modal_Producto">

                                    <input type="text" disabled value={id} />
                                    <input type="text" disabled value={nombre} />
                                </div>
                                <div className="form-modal_Producto">
                                    <label htmlFor="">Stock Disponible</label>
                                    <input type="text" disabled value={ObtenerStock()} />
                                </div>

                            </div>
                            <div className=" buttons">
                                <button onClick={closeModal}>cancelar</button>
                                <button onClick={() => Traslate()}>agregar</button>
                            </div>
                        </div>



                    </div>
                )
            }
        </>
    )
}
