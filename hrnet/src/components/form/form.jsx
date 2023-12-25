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


    const [employeeArray, setEmployeeArray] = useState(localStorage.length <= 0 || localStorage.employee === 'null' ? [] : JSON.parse(localStorage.getItem('employee')));
    const [dataStates, setDataStates] = useState(statesArray);
    const [dataDepartments, setDataDepartments] = useState(departmentsArray);
    const [formData, setformData] = useState({
        firstName: '',
        lastName: '',
        dateBirth: '',
        dateStart: '',
        street: '',
        city: '',
        zipCode: '',
        state: '',
        department: ''
    });
    const [errorMsg, setErrorMsg] = useState({
        firstName: '',
        lastName: '',
        dateBirth: '',
        dateStart: '',
        street: '',
        city: '',
        zipCode: '',
        state: '',
        department: ''
    });

    const handleInputChange = () => { }

    const handleSubmit = (e) => {
        e.preventDefault()

        let isFormValid = true

        const newErrors = { firstName: '', lastName: '', dateBirth: '', dateStart: '', street: '', city: '', zipCode: '', state: '', department: '' };

        const regexFirstName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{2,}$/;
        const regexLastName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{2,}$/;
        const regexCity = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
        const regexStreet = /^[a-zA-Z0-9\s',.-]{2,}$/;
        const regexZipcode = /^\d{5}(?:-\d{4})?$/;

        if (formData.firstName.trim() === '' || regexFirstName.test(formData.firstName) === false) { newErrors.firstName = "Invalid Firstname"; isFormValid = false }
        if (formData.lastName.trim() === '' || regexLastName.test(formData.lastName) === false) { newErrors.lastName = "Invalid lastName"; isFormValid = false }
        if (formData.dateBirth.trim() === '') { newErrors.dateBirth = "Invalid Date of Birth"; isFormValid = false }
        if (formData.dateStart.trim() === '') { newErrors.dateStart = "Invalid Date of Start"; isFormValid = false }
        if (formData.street.trim() === '' || regexStreet.test(formData.street) === false) { newErrors.street = "Invalid Street"; isFormValid = false }
        if (formData.city.trim() === '' || regexCity.test(formData.city) === false) { newErrors.city = "Invalid City"; isFormValid = false }
        if (formData.zipCode.trim() === '' || regexZipcode.test(formData.zipCode) === false) { newErrors.zipCode = "Invalid Zip Code"; isFormValid = false }
        if (formData.department.trim() === '') { newErrors.department = "Invalid Department"; isFormValid = false }
        if (formData.state.trim() === '') { newErrors.state = "Invalid State"; isFormValid = false }




        /*if (inputLastName.current.value === '' || regexLastName.test(inputLastName.current.value) === false) { errMsgLast.current = true; isFormValid = false } else { errMsgLast.current = false }
        if (inputDateBirth.current.value === '' || inputDateBirth.current.value > inputDateStart.current.value) { errMsgBirth.current = true; isFormValid = false } else { errMsgBirth.current = false }
        if (inputDateStart.current.value === '' || inputDateBirth.current.value > inputDateStart.current.value) { errMsgStart.current = true; isFormValid = false } else { errMsgStart.current = false }
        if (inputStreet.current.value === '' || regexStreet.test(inputStreet.current.value) === false) { errMsgStreet.current = true; isFormValid = false } else { errMsgStreet.current = false }
        if (inputCity.current.value === '' || regexCity.test(inputCity.current.value) === false) { errMsgCity.current = true; isFormValid = false } else { errMsgCity.current = false }
        if (inputState.current.value === '') { errMsgState.current = true; isFormValid = false } else { errMsgState.current = false }
        if (inputZipCode.current.value === '' || regexZipcode.test(inputZipCode.current.value) === false) { errMsgZipCode.current = true; isFormValid = false } else { errMsgZipCode.current = false }
        if (inputDepartment.current.value === '') { errMsgDepartment.current = true; isFormValid = false } else { errMsgDepartment.current = false }*/

        return isFormValid
    }



    useEffect(() => {

        /*if (handleSubmit()) {
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
    }*/

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
                <input required ref={inputFirstName} type="text" id="first-name" value={formData.firstName} />
                <p className='errorMsg'>{errorMsg.firstName}Invalid Firstname</p>


                <label htmlFor="last-name">Last Name</label>
                <input required ref={inputLastName} type="text" id="last-name" value={formData.lastName} />
                <p className='errorMsg'>{errorMsg.lastName}Invalid Lastname</p>

                <DatePicker inputRef={inputDateBirth} onInputChange={handleInputChange} labelText='Date of Birth' id='date-of-birth' value={formData.birthDate} />
                <p className='errorMsg'>{errorMsg.dateBirth}Invalid Date of Birth</p>

                <DatePicker inputRef={inputDateStart} onInputChange={handleInputChange} labelText='Start Date' id='start-date' value={formData.startDate} />
                <p className='errorMsg'>{errorMsg.dateStart}Invalid Start Date</p>
            </fieldset>


            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input required ref={inputStreet} id="street" type="text" value={formData.street} />
                <p className='errorMsg'>{errorMsg.street}Invalid Street</p>

                <label htmlFor="city">City</label>
                <input required ref={inputCity} id="city" type="text" value={formData.city} />
                <p className='errorMsg'>{errorMsg.city}Invalid City</p>

                <Menu inputRef={inputState} onInputChange={handleInputChange} data={dataStates} text='State' className='label-state' htmlFor='state' name='state' id="state" value={formData.state} />
                <p className='errorMsg'>{errorMsg.state}Select a state</p>

                <label htmlFor="zip-code">Zip Code</label>
                <input required ref={inputZipCode} id="zip-code" type="number" value={formData.firstName} />
                <p className='errorMsg'>{errorMsg.zipCode}Invalid Zip Code</p>

            </fieldset>
            <Menu inputRef={inputDepartment} onInputChange={handleInputChange} data={dataDepartments} text='Department' className='label-department' htmlFor='department' name='department' id="department" value={formData.department} />
            <p className='errorMsg'>{errorMsg.department}Select a state</p>

            <button onClick={handleSubmit} >Add employee</button>
        </form >
    </>
}