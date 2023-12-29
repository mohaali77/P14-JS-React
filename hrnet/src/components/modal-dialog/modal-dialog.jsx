import './style/modal-dialog.css'
import image from '../../images/modal.png'
import { useEffect, useRef } from 'react'

export function ModalDialog() {

    const imgRef = useRef()
    const containerRef = useRef()

    useEffect(() => {

        imgRef.current.addEventListener('click', (e) => {
            containerRef.current.classList.remove('modal-container')
            containerRef.current.classList.add('close')
        })
    })

    return <>
        <div ref={containerRef} className='modal-container'>
            <div className='modal'>
                <p>Employee Created !</p>
                <img ref={imgRef} className='close-modal' src={image} alt="" />
            </div>
        </div>

    </>
}