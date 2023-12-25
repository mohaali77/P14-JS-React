import './style/menu.css'

export default function Menu({ className, name, id, forName, text, data, inputRef, onChange }) {

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
}