import './style/form.css'
import Menu from "../menu/menu";
import { statesArray, departmentsArray } from '../../data/data';
import { useState, useRef, useEffect } from 'react';
import { DatePicker } from '../date-picker/date-picker';
//import { useDispatch } from "react-redux";
//import { create } from "../../redux/employeeSlice";

export function Form() {

    // const dispatch = useDispatch();
    const inputFirstName = useRef('');
    const inputLastName = useRef('');
    const inputDateBirth = useRef('');
    const inputDateStart = useRef('');
    const inputStreet = useRef('');
    const inputCity = useRef('');
    const inputState = useRef('');
    const inputZipCode = useRef('');
    const inputDepartment = useRef('');

    const errMsgFirst = useRef(false);
    const errMsgLast = useRef(false);
    const errMsgBirth = useRef(false);
    const errMsgStart = useRef(false);
    const errMsgStreet = useRef(false);
    const errMsgCity = useRef(false);
    const errMsgState = useRef(false);
    const errMsgZipCode = useRef(false);
    const errMsgDepartment = useRef(false);


    const [employeeArray, setEmployeeArray] = useState(
        localStorage.length <= 0 ? [] : JSON.parse(localStorage.getItem('employee')));
    const [dataStates, setDataStates] = useState(statesArray);
    const [dataDepartments, setDataDepartments] = useState(departmentsArray);
    const [isFormValid, setIsFormValid] = useState(null)

    const handleInputChange = () => { }

    const handleSubmit = (e) => {
        e.preventDefault()

        function showErrorMsg() {

            const regexFirstName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{2,}$/;
            const regexLastName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{2,}$/;
            const regexCity = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
            const regexStreet = /^[a-zA-Z0-9\s',.-]{2,}$/;
            const regexZipcode = /^\d{5}(?:-\d{4})?$/;


            inputFirstName.current.value === '' || regexFirstName.test(inputFirstName.current.value) === false ? errMsgFirst.current = true : errMsgFirst.current = false;
            inputLastName.current.value === '' || regexLastName.test(inputLastName.current.value) === false ? errMsgLast.current = true : errMsgLast.current = false
            inputDateBirth.current.value === '' || inputDateBirth.current.value > inputDateStart.current.value ? errMsgBirth.current = true : errMsgBirth.current = false
            inputDateStart.current.value === '' || inputDateBirth.current.value > inputDateStart.current.value ? errMsgStart.current = true : errMsgStart.current = false
            inputStreet.current.value === '' || regexStreet.test(inputStreet.current.value) === false ? errMsgStreet.current = true : errMsgStreet.current = false
            inputCity.current.value === '' || regexCity.test(inputCity.current.value) === false ? errMsgCity.current = true : errMsgCity.current = false
            inputState.current.value === '' ? errMsgState.current = true : errMsgState.current = false
            inputZipCode.current.value === '' || regexZipcode.test(inputZipCode.current.value) === false ? errMsgZipCode.current = true : errMsgZipCode.current = false
            inputDepartment.current.value === '' ? errMsgDepartment.current = true : errMsgDepartment.current = false

            errMsgFirst.current || errMsgLast.current || errMsgBirth.current || errMsgStart.current || errMsgStreet.current || errMsgCity.current || errMsgState.current || errMsgZipCode ? setIsFormValid(false) : setIsFormValid(true)

            console.log('errorMsgFirst ' + errMsgFirst.current);
            console.log('isFormValid ' + isFormValid);
            //ajouter années minimum de différence entre date de commencement et date de naissance ?
        }

        showErrorMsg()

        if (isFormValid) {
            const newEmployee = {
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

            setEmployeeArray((oldEmployee) => [...oldEmployee, (newEmployee)])
        }

    }

    useEffect(() => {

        if (localStorage.length <= 0) {
            localStorage.setItem('employee', [])
        }
        const tableauJSON = JSON.stringify(employeeArray);
        localStorage.setItem('employee', tableauJSON);

    }, [employeeArray]);


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
                {errMsgZipCode.current ? <p className='errorMsg'>Invalid Zip Code</p> : null}

            </fieldset>
            <Menu inputRef={inputDepartment} onInputChange={handleInputChange} data={dataDepartments} text='Department' className='label-department' htmlFor='department' name='department' id="department" />
            {errMsgDepartment.current ? <p className='errorMsg'>Select a state</p> : null}

            <button onClick={handleSubmit} >Add employee</button>
        </form >
    </>
}