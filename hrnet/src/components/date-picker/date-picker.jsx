import './style/date-picker.css'
import { Datepicker } from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

export function DatePicker(//{ id, labelText }
) {
    const [selectedDate, setDate] = useState(null)
    return <>
        <Datepicker selected={selectedDate} onChange={date => setDate(date)} />
    </>
}

/*<label id={id} htmlFor={id}>
            {labelText}
        </label>
        <input type="date" id={id} placeholder="A" />*/