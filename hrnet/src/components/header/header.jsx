import logo from '../../images/logo.webp'
import './style/header.css'

//fonction qui gère le composant Header
export default function Header() {
    return <>
        <header >
            <img src={logo} alt="Logo de l'entreprise Wealth Health" />
            <h1>HRNet</h1>
        </header>
    </>
}