import React, { useRef } from 'react'
import Calendar from './Calendar'
import useFetch from '../hook/useFetch'



const Modal = ({modalClose}: any) => {

    // 모달창 띄우는 코드
    const onCloseModal = (e: React.MouseEvent) => {
        console.log('e.target: ', e.target)
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }

    }
    
    // 코트 데이터 db 연결 시키는 코드
    
    const days:any[] = useFetch("http://localhost:3001/days");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         fetch(`http://localhost:3001/notes`,{
             method : "post",
             headers : {
                 'content-Type' : 'application/json',
             },
             body : JSON.stringify({
                 body : dayNote.current.value,
             }),
         })
         .then(res => {
             if(res.ok) {
                 alert("작성 완료!")
             }
         })
    }

    const dayNote:React.MutableRefObject<any> = useRef(null);


    return (
        <div className="ModalContainer" onClick={onCloseModal}>
            <form onSubmit={(e)=> {onSubmit(e)}}>
                <div className="modal">  
                        <button className="cloes_btn" onClick={modalClose}>X</button>
                        <div className="txet_title">
                        </div>
                        <div className="txet_box"  >
                            {days.map((notes) => (
                                <textarea maxLength={500} value={notes.id} ref={dayNote}  >
                                            {notes.body}
                                </textarea>
                        ))}
                        </div>
                        <button className="modal_btn">완료</button>
                </div>
            </form>
        </div>
    )
}

export default Modal;