import './style/modal-dialog.css'
import image from '../../images/téléchargement.png'

export function ModalDialog() {
    return <>
        <div className='modal-container'><div className='modal'>
            <p>Employee Created !</p>
            <img className='close-modal' src={image} alt="" />
        </div></div>

    </>
}