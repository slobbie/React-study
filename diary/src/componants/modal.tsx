import React from 'react'
import Calendar from './Calendar'


const Modal = ({modalClose}: any) => {
    return (
        <div className="ModalContainer">
            <div className="modal">
                <button onClick={modalClose}> Modal Close</button>
                <div className="txet_title"></div>
                <div className="txet_box"></div>
                <input type="text" />
            </div>
        </div>
    )
}

export default Modal;