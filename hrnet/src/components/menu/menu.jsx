import './style/menu.css'


export default function Menu({ className, name, id, forName, text, data, ref }) {

    return <>
        <label className={className} htmlFor={forName}>{text}</label>
        <select ref={ref} name={name} id={id}>
            {data.map((data) => (
                <option key={data.abbreviation} value={data.abbreviation}>
                    {data.name}
                </option>
            ))}
        </select>
    </>
}