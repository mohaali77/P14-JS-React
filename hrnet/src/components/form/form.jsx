import './style/form.css'
import Menu from "../menu/menu";
import { statesArray, departmentsArray } from '../../data/data';
import { useState, useRef } from 'react';
import { DatePicker } from '../date-picker/date-picker';

export function Form() {

    const inputFirstName = useRef('');
    const inputLastName = useRef('');
    const inputDateBirth = useRef('');
    const inputDateStart = useRef('');
    const inputStreet = useRef('');
    const inputCity = useRef('');
    const inputState = useRef('');
    const inputZipCode = useRef('');
    const inputDepartment = useRef('');

    const [errMsgFirst, setDataFirst] = useState('');
    const [errMsgLast, seterrMsgLast] = useState('');
    const [errMsgBirth, seterrMsgBirth] = useState('');
    const [errMsgStart, seterrMsgStart] = useState('');
    const [errMsgStreet, seterrMsgStreet] = useState('');
    const [errMsgCity, seterrMsgCity] = useState('');
    const [errMsgState, seterrMsgState] = useState('');
    const [errMsgZipCode, seterrMsgZipCode] = useState('');
    const [errMsgDepartment, seterrMsgDepartment] = useState('');

    const [dataStates, setDataStates] = useState(statesArray);
    const [dataDepartments, setDataDepartments] = useState(departmentsArray);

    const handleInputChange = () => {
        console.log(
            `Date Naissance : ${inputDateBirth.current.value}`,
            `Date Début : ${inputDateStart.current.value}`,
            `Departement : ${inputDepartment.current.value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let form = {
            firstname: inputFirstName.current.value,
            lastname: inputLastName.current.value,
            dateBirth: inputDateBirth.current.value,
            dateStart: inputDateStart.current.value,
            street: inputStreet.current.value,
            city: inputCity.current.value,
            state: inputState.current.value,
            zipCode: inputZipCode.current.value,
            department: inputDepartment.current.value,
        }
        console.log(form);
    }

    return <>
        <form action="" id="create-employee">
            <h2>Create Employee</h2>
            <fieldset className='personal-infos'>
                <legend>Personal informations
                </legend>

                <label htmlFor="first-name">First Name</label>
                <input required ref={inputFirstName} type="text" id="first-name" />
                <p className='errorMsg'>Prénom invalide</p>

                <label htmlFor="last-name">Last Name</label>
                <input required ref={inputLastName} type="text" id="last-name" />
                <p className='errorMsg'>Nom invalide</p>

                <DatePicker inputRef={inputDateBirth} onInputChange={handleInputChange} labelText='Date of Birth' id='date-of-birth' />
                <p className='errorMsg'>Date de naissance invalide</p>

                <DatePicker inputRef={inputDateStart} onInputChange={handleInputChange} labelText='Start Date' id='start-date' />
                <p className='errorMsg'>Date de début invalide</p>
            </fieldset>


            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input required ref={inputStreet} id="street" type="text" />
                <p className='errorMsg'>Date de début invalide</p>

                <label htmlFor="city">City</label>
                <input required ref={inputCity} id="city" type="text" />
                <p className='errorMsg'>Date de début invalide</p>

                <Menu inputRef={inputState} onInputChange={handleInputChange} data={dataStates} text='State' className='label-state' htmlFor='state' name='state' id="state" />

                <label htmlFor="zip-code">Zip Code</label>
                <input required ref={inputZipCode} id="zip-code" type="number" />
                <p className='errorMsg'>Date de début invalide</p>

            </fieldset>
            <Menu inputRef={inputDepartment} onInputChange={handleInputChange} data={dataDepartments} text='Department' className='label-department' htmlFor='department' name='department' id="department" />
            <button onClick={handleSubmit} >Add employee</button>
        </form >
    </>
}