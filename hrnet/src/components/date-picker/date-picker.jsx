import './style/date-picker.css'

//fonction qui gère le composant DatePicker
export default function DatePicker({ id, labelText, onChange, name }) {

    return <>
        <label id={id} htmlFor={id}>
            {labelText}
        </label>
        <input name={name} onChange={onChange} type="date" className={id} placeholder="A" />
    </>
}