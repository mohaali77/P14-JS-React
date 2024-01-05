import { useRef } from 'react'
import './style/menu.css'


/*export default function Menu({ name, text, data, inputRef, onChange, errorMsg }) {

    const listRef = useRef()
    const errorRef = useRef()

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

            if (errorRef.current.textContent === 'Invalid ' + text) {
                listRef.current.classList.add('error-' + name)
                listRef.current.classList.remove('list-' + name)

            } else if (errorRef.current.textContent === '') {
                listRef.current.classList.add('list-' + name)
                listRef.current.classList.remove('error-' + name)
            }
        })

    }, [])

    return <>
        <label className={'label-' + name} htmlFor={name}>{text}</label>
        <input type='text' required ref={inputRef} onChange={onChange} name={name} id={name} />
        {//<li value="">Choose a {id}</li>
        }
        <ul ref={listRef} className={" mask list-" + name}  >
            {data.map((data) => (
                <li onClick={chooseList} key={data.abbreviation} value={data.name}>
                    {data.name}
                </li>
            ))}
        </ul>
        <p ref={errorRef} className='errorMsg'>{errorMsg}</p>
    </>
}*/


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