import logo from '../../images/logo.png'
import './style/header.css'

export default function Header() {
    return <>
        <header >
            <img src={logo} alt="Logo de l'entreprise Wealth Health" />
            <h1>HRNet</h1>
        </header>
    </>
}