import React from 'react'

export default function ModalProducto({ showModal, closeModal }) {
    return (
        <>
            {showModal && (
                <div className="modal-page" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>X</button>
                        <h2>goa</h2>

                    </div>
                </div>
            )}
        </>
    )
}
