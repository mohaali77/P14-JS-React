import { useRef } from 'react'
import './style/date-picker.css'

export function DatePicker({ id, labelText, ref }) {
    return <>
        <label id={id} htmlFor={id}>
            {labelText}
        </label>
        <input ref={inputDateBirth} type="date" id={id} placeholder="A" />
    </>
}

/*import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function MyDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <div>
            <label htmlFor="datepicker">Select a Date:</label>
            <DatePicker
                id="datepicker"
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="MM/dd/yyyy" // Format de la date
            />
        </div>
    );
}
*/