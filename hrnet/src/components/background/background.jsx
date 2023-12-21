import background from '../images/background.jpg'
import './style/background.css'

export default function Background() {
    return <>
        <div className='background-picture'>
            <img src={background} alt="" />
        </div>
    </>
}