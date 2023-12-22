import './style/form.css'
import Menu from "../menu/menu";
import { statesArray, departmentsArray } from '../../data/data';
import { useState } from 'react';
import { DatePicker } from '../date-picker/date-picker';

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
                <p className='errorMsg'>Prénom invalide</p>

                <label htmlFor="last-name">Last Name</label>
                <input required type="text" id="last-name" />
                <p className='errorMsg'>Nom invalide</p>

                <DatePicker //labelText='Date of Birth' id='date-of-birth' 
                />
                <p className='errorMsg'>Date de naissance invalide</p>

                <DatePicker //labelText='Start Date' id='start-date' 
                />
                <p className='errorMsg'>Date de début invalide</p>
            </fieldset>


            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input required id="street" type="text" />
                <p className='errorMsg'>Date de début invalide</p>

                <label htmlFor="city">City</label>
                <input required id="city" type="text" />
                <p className='errorMsg'>Date de début invalide</p>

                <Menu data={dataStates} text='State' className='label-state' htmlFor='state' name='state' id="state" />

                <label htmlFor="zip-code">Zip Code</label>
                <input required id="zip-code" type="number" />
                <p className='errorMsg'>Date de début invalide</p>

            </fieldset>
            <Menu data={dataDepartments} text='Department' className='label-department' htmlFor='department' name='department' id="department" />
            <button>Add employee</button>
        </form >
    </>
}