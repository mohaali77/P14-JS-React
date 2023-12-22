import './style/menu.css'


export default function Menu({ className, name, id, forName, text, data }) {

    return <>
        <label className={className} htmlFor={forName}>{text}</label>
        <select name={name} id={id}>
            {data.map((data) => (
                <option key={data.abbreviation} value={data.abbreviation}>
                    {data.name}
                </option>
            ))}
        </select>
    </>
}