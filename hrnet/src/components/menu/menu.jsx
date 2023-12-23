import './style/menu.css'

export default function Menu({ className, name, id, forName, text, data, inputRef, onInputChange }) {

    const handleChange = () => {
        // Accéder à la valeur avec inputRef.current.value
        const newValue = inputRef.current.value;
        // Appeler la fonction du parent avec la nouvelle valeur
        onInputChange(newValue);
    };

    return <>
        <label className={className} htmlFor={forName}>{text}</label>
        <select required ref={inputRef} onChange={handleChange} name={name} id={id}>
            {data.map((data) => (
                <option key={data.abbreviation} value={data.name}>
                    {data.name}
                </option>
            ))}
        </select>
    </>
}