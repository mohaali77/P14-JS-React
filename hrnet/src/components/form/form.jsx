import './style/form.css'
import Menu from "../menu/menu";
import { statesArray, departmentsArray } from '../../data/data';
import { useState } from 'react';

export function Form() {

    const [dataStates, setDataStates] = useState(statesArray);
    const [dataDepartments, setDataDepartments] = useState(departmentsArray);

    return <>
        <form action="" id="create-employee">
            <h2>Create Employee</h2>
            <fieldset className='personal-infos'>
                <legend>Personal informations
                </legend>

                <label htmlFor="first-name">First Name</label>
                <input required type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input required type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input required id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input required id="start-date" type="text" />
            </fieldset>


            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input required id="street" type="text" />

                <label htmlFor="city">City</label>
                <input required id="city" type="text" />

                <Menu data={dataStates} text='State' className='label-state' htmlFor='state' name='state' id="state" />

                <label htmlFor="zip-code">Zip Code</label>
                <input required id="zip-code" type="number" />
            </fieldset>
            <Menu data={dataDepartments} text='Department' className='label-department' htmlFor='department' name='department' id="department" />
            <button>Add employee</button>
        </form >
    </>
}