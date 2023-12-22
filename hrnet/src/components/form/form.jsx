import './style/form.css'
import Menu from "../menu/menu";
import { stateArray } from '../../data/states';
import { useState } from 'react';

export function Form() {
    const [dataStates, setDataStates] = useState(stateArray);
    return <>
        <form action="" id="create-employee">
            <h2>Create Employee</h2>
            <fieldset className='personal-infos'>
                <legend>Personal informations
                </legend>

                <label for="first-name">First Name</label>
                <input required type="text" id="first-name" />

                <label for="last-name">Last Name</label>
                <input required type="text" id="last-name" />

                <label for="date-of-birth">Date of Birth</label>
                <input required id="date-of-birth" type="text" />

                <label for="start-date">Start Date</label>
                <input required id="start-date" type="text" />
            </fieldset>


            <fieldset class="address">
                <legend>Address</legend>

                <label for="street">Street</label>
                <input required id="street" type="text" />

                <label for="city">City</label>
                <input required id="city" type="text" />

                <Menu data={data} text='State' className='label-state' for='state' name='state' id="state" />

                <label for="zip-code">Zip Code</label>
                <input required id="zip-code" type="number" />
            </fieldset>
            <Menu text='Department' className='label-department' for='department' name='department' id="department" />
            <button onclick="saveEmployee()">Add employee</button>
        </form>
    </>
}