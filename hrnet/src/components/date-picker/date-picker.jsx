import './style/date-picker.css'

//fonction qui gère le composant DatePicker
export default function DatePicker({ id, labelText, inputRef, onChange, name }) {

    return <>
        <label id={id} htmlFor={id}>
            {labelText}
        </label>
        <input name={name} ref={inputRef} onChange={onChange} type="date" className={id} placeholder="A" />
    </>
}