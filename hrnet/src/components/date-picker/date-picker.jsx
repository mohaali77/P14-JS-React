import './style/date-picker.css'

export function DatePicker({ id, labelText, inputRef, onInputChange }) {

    const handleChange = () => {
        // Accéder à la valeur avec inputRef.current.value
        const newValue = inputRef.current.value;
        // Appeler la fonction du parent avec la nouvelle valeur
        onInputChange(newValue);
    };

    return <>
        <label id={id} htmlFor={id}>
            {labelText}
        </label>
        <input required ref={inputRef} onChange={handleChange} type="date" id={id} placeholder="A" />
    </>
}