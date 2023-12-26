import './style/menu.css'


export default function Menu({ className, name, id, forName, text, data, inputRef, onChange }) {

    return <>
        <label className={className} htmlFor={forName}>{text}</label>
        <input type='text' required ref={inputRef} onChange={onChange} name={name} id={id} />
        {//<li value="">Choose a {id}</li>
        }
        <ul className={"list-" + name}  >
            {data.map((data) => (
                <li key={data.abbreviation} value={data.name}>
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