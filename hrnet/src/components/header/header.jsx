import logo from '../images/logo.png'
import './header.css'

export default function Header() {
    return <>
        <header >
            <h1>HRNet by </h1>
            <img src={logo} alt="" />
        </header>
    </>
}