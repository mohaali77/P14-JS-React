import './style/form.css'
import Menu from "../menu/menu";
import { statesArray, departmentsArray } from '../../data/data';
import { useState, useRef, useEffect } from 'react';
import { DatePicker } from '../date-picker/date-picker';
//import { useDispatch } from "react-redux";
//import { create } from "../../redux/employeeSlice";

export function Form() {

    // const dispatch = useDispatch();
    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputDateBirth = useRef();
    const inputDateStart = useRef();
    const inputStreet = useRef();
    const inputCity = useRef();
    const inputState = useRef();
    const inputZipCode = useRef();
    const inputDepartment = useRef();

    const [employeeArray, setEmployeeArray] = useState(localStorage.length <= 0 || localStorage.employee === 'null' ? [] : JSON.parse(localStorage.getItem('employee')));
    const [dataStates, setDataStates] = useState(statesArray);
    const [dataDepartments, setDataDepartments] = useState(departmentsArray);
    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = (e) => {

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

        setErrorMsg(newErrors)

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
                <input required ref={inputFirstName} type="text" id="first-name" value={formData.firstName} onChange={handleChange}
                />
                <p className='errorMsg'>{errorMsg.firstName}</p>


                <label htmlFor="last-name">Last Name</label>
                <input required ref={inputLastName} type="text" id="last-name" value={formData.lastName} onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.lastName}</p>

                <DatePicker inputRef={inputDateBirth} onInputChange={handleInputChange} labelText='Date of Birth' id='date-of-birth' value={formData.birthDate} onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.dateBirth}</p>

                <DatePicker inputRef={inputDateStart} onInputChange={handleInputChange} labelText='Start Date' id='start-date' value={formData.startDate} onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.dateStart}</p>
            </fieldset>


            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input required ref={inputStreet} id="street" type="text" value={formData.street} onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.street}</p>

                <label htmlFor="city">City</label>
                <input required ref={inputCity} id="city" type="text" value={formData.city} />
                <p className='errorMsg'>{errorMsg.city}</p>

                <Menu inputRef={inputState} onInputChange={handleInputChange} data={dataStates} text='State' className='label-state' htmlFor='state' name='state' id="state" value={formData.state} onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.state}</p>

                <label htmlFor="zip-code">Zip Code</label>
                <input required ref={inputZipCode} id="zip-code" type="number" value={formData.zipCode} onChange={handleChange}
                />
                <p className='errorMsg'>{errorMsg.zipCode}</p>

            </fieldset>
            <Menu inputRef={inputDepartment} onInputChange={handleInputChange} data={dataDepartments} text='Department' className='label-department' htmlFor='department' name='department' id="department" value={formData.department} onChange={handleChange} />
            <p className='errorMsg'>{errorMsg.department}</p>

            <button type='submit' onClick={validateForm} >Add employee</button>
        </form >
    </>
}