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

    const [form, setForm] = useState({});

    const errMsgFirst = useRef(false);
    const errMsgLast = useRef(false);
    const errMsgBirth = useRef(false);
    const errMsgStart = useRef(false);
    const errMsgStreet = useRef(false);
    const errMsgCity = useRef(false);
    const errMsgState = useRef(false);
    const errMsgZipCode = useRef(false);
    const errMsgDepartment = useRef(false);

    const [dataStates, setDataStates] = useState(statesArray);
    const [dataDepartments, setDataDepartments] = useState(departmentsArray);

    const handleInputChange = () => { }

    const showErrorMsg = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm(
            {
                firstname: inputFirstName.current.value,
                lastname: inputLastName.current.value,
                dateBirth: inputDateBirth.current.value,
                dateStart: inputDateStart.current.value,
                street: inputStreet.current.value,
                city: inputCity.current.value,
                state: inputState.current.value,
                zipCode: inputZipCode.current.value,
                department: inputDepartment.current.value,
            })
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
                {errMsgFirst.current ? <p className='errorMsg'>Invalid Firstname</p> : null}


                <label htmlFor="last-name">Last Name</label>
                <input required ref={inputLastName} type="text" id="last-name" />
                {errMsgLast.current ? <p className='errorMsg'>Invalid Lastname</p> : null}

                <DatePicker inputRef={inputDateBirth} onInputChange={handleInputChange} labelText='Date of Birth' id='date-of-birth' />
                {errMsgBirth.current ? <p className='errorMsg'>Invalid Date of Birth</p> : null}

                <DatePicker inputRef={inputDateStart} onInputChange={handleInputChange} labelText='Start Date' id='start-date' />
                {errMsgStart.current ? <p className='errorMsg'>Invalid Start Date</p> : null}
            </fieldset>


            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input required ref={inputStreet} id="street" type="text" />
                {errMsgStreet.current ? <p className='errorMsg'>Invalid Street</p> : null}

                <label htmlFor="city">City</label>
                <input required ref={inputCity} id="city" type="text" />
                {errMsgCity.current ? <p className='errorMsg'>Invalid City</p> : null}

                <Menu inputRef={inputState} onInputChange={handleInputChange} data={dataStates} text='State' className='label-state' htmlFor='state' name='state' id="state" />
                {errMsgState.current ? <p className='errorMsg'>Select a state</p> : null}

                <label htmlFor="zip-code">Zip Code</label>
                <input required ref={inputZipCode} id="zip-code" type="number" />
                {errMsgFirst.current ? <p className='errorMsg'>Invalid Zip Code</p> : null}

            </fieldset>
            <Menu inputRef={inputDepartment} onInputChange={handleInputChange} data={dataDepartments} text='Department' className='label-department' htmlFor='department' name='department' id="department" />
            {errMsgState.current ? <p className='errorMsg'>Select a state</p> : null}

            <button onClick={handleSubmit} >Add employee</button>
        </form >
    </>
}