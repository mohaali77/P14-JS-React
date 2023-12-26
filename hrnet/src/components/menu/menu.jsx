import { useEffect, useRef, useState } from 'react'
import './style/menu.css'


export default function Menu({ className, name, text, data, inputRef, onChange }) {

    const listRef = useRef()

    const chooseList = (e) => {
        console.log(e.target.textContent);
        inputRef.current.value = e.target.textContent;
        onChange(name, e.target.textContent);
    }

    useEffect(() => {

        inputRef.current.addEventListener('click', (e) => {
            if (listRef.current.classList.contains('mask')) {
                listRef.current.classList.toggle('mask')
            }
        })

        document.addEventListener('click', (e) => {
            if (e.target !== inputRef.current && !listRef.current.classList.contains('mask')) {
                listRef.current.classList.toggle('mask')
            }
        })

    }, [])

    return <>
        <label className={className} htmlFor={name}>{text}</label>
        <input type='text' required ref={inputRef} onChange={onChange} name={name} id={name} />
        {//<li value="">Choose a {id}</li>
        }
        <ul ref={listRef} className={"mask list-" + name}  >
            {data.map((data) => (
                <li onClick={chooseList} key={data.abbreviation} value={data.name}>
                    {data.name}
                </li>
            ))}
        </ul>
    </>
}


/*export default function Menu({ className, name, id, forName, text, data, inputRef, onChange }) {

    return <>
        <label className={className} htmlFor={forName}>{text}</label>
        <select required ref={inputRef} onChange={onChange} name={name} id={id}>
            <option value="">Choose a {id}</option>
            {data.map((data) => (
                <option key={data.abbreviation} value={data.name}>
                    {data.name}
                </option>
            ))}
        </select>
    </>
}*/