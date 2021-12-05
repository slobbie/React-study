import React from 'react'
import Calendar from './Calendar'


const Modal = ({modalClose}: any) => {
    const onCloseModal = (e: React.MouseEvent) => {
        console.log('e.target: ', e.target)
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }

    }
    return (
        <div className="ModalContainer" onClick={onCloseModal}>
            <div className="modal">
                <button className="cloes_btn" onClick={modalClose}>X</button>
                <div className="txet_title">
                </div>
                <div className="txet_box">
                    <textarea maxLength={500} />
                </div>
                
            </div>
        </div>
    )
}

export default Modal;