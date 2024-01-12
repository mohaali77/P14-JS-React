import { useRef } from 'react'
import './style/menu.css'

//fonction qui gère le composant Menu
export default function Menu({ errorMsg, name, text, data, inputRef, onChange }) {

    const errorRef = useRef()

    return <>
        <label className={name} htmlFor={name}>{text}</label>
        <select required ref={inputRef} onChange={onChange} name={name} id={name}>
            <option value="">Choose a {name}</option>
            {data.map((data) => (
                <option key={data.abbreviation} value={data.name}>
                    {data.name}
                </option>
            ))}
        </select>
        <p ref={errorRef} className='errorMsg'>{errorMsg}</p>

    </>
}