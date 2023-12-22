import './style/date-picker.css'

export function DatePicker({ className, name, id, labelText }) {
    return <>
        <label className={className} htmlFor={id}>
            {labelText}
        </label>
        <input type="date" name={name} id={id} placeholder="jj/mm/aaaa" />
    </>
}