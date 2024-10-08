import React from 'react'
import { useAlmacenStore } from '../../store/AlmacenStore';
import { useForm } from '../../hooks/useForm';

export default function ModalTraslate({ showModal, closeModal, productSelect, almacenOrigen, almacenDestino, opcion }) {


    const { almacen_producto, trasladoAlmacen ,IngresoAlmacen,SalidaAlmacen} = useAlmacenStore()

    const { id, nombre } = productSelect

    const { cantidad, changeForm } = useForm({ cantidad: 5 })

    function ObtenerStock() {

        const filt = almacen_producto.filter((val) => (val.id_producto === parseInt(id) && val.id_almacen === parseInt(almacenOrigen)))
        if (filt.length > 0) {

            return filt[0].cantidad
        }
        return 0


    }


    const Traslate = () => {

        switch (parseInt(opcion)) {
            case 0:
                trasladoAlmacen(id, parseInt(almacenOrigen), parseInt(almacenDestino), parseInt(cantidad))

                break;
            case 1:
                
                SalidaAlmacen(id, parseInt(almacenOrigen), parseInt(cantidad))

                break;
            case 2:
                IngresoAlmacen(id, parseInt(almacenOrigen), parseInt(cantidad))
                break;
            default:
                break;
        }

        closeModal()


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
                                <div className="form-modal_Producto">
                                    <label htmlFor="">Cantidad a trasladar</label>
                                    <input type="number" min={0} name='cantidad' onChange={changeForm} value={cantidad} />
                                </div>

                            </div>
                            <div className=" buttons">
                                <button onClick={closeModal}>cancelar</button>
                                <button disabled={(ObtenerStock()<cantidad || cantidad<=0)&&parseInt(opcion)!=2} onClick={() => Traslate()}>agregar</button>
                            </div>
                        </div>



                    </div>
                )
            }
        </>
    )
}
