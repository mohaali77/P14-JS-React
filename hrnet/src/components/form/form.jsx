import './style/form.css'
import Menu from "../menu/menu";
import { statesArray, departmentsArray } from '../../data/data';
import { useState, useRef, useEffect } from 'react';
import { DatePicker } from '../date-picker/date-picker';
import { ModalDialog } from "../../components/modal-dialog/modal-dialog";

export function Form() {

    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputDateBirth = useRef();
    const inputDateStart = useRef();
    const inputStreet = useRef();
    const inputCity = useRef();
    const inputState = useRef();
    const inputZipCode = useRef();
    const inputDepartment = useRef();

    const [employeeArray, setEmployeeArray] = useState([]);
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
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        // Vérifie si des données existent déjà dans le localStorage
        const existingData = JSON.parse(localStorage.getItem('employee'));

        // Si les données existent, mettez à jour l'état employeeArray
        if (existingData) {
            setEmployeeArray(existingData);
        } else {
            // Si le localStorage est vide ou null, initialisez-le avec un tableau vide
            localStorage.setItem('employee', JSON.stringify([]));
        }

        console.log(employeeArray);
    }, [])

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

    const validateForm = (e) => {
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

        console.log(formData.state);

        return isFormValid
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Créez un objet avec les informations du formulaire
            const formDataObject = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                dateBirth: formData.dateBirth,
                dateStart: formData.dateStart,
                street: formData.street,
                city: formData.city,
                zipCode: formData.zipCode,
                state: formData.state,
                department: formData.department
            };

            // Mettez à jour le tableau existant
            setEmployeeArray((prevArray) => {
                const updatedArray = [...prevArray, formDataObject];
                // Enregistrez le tableau mis à jour dans le localStorage
                localStorage.setItem('employee', JSON.stringify(updatedArray));
                return updatedArray;
            });

            // Réinitialisez le formulaire après la sauvegarde
            setFormData({
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

            setShowModal(true)

            console.log('Formulaire soumis avec succès !');
        } else {
            console.log('no');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData.state);
    };

    const handleChangeMenu = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData.state);
    };

    return <>
        <form onSubmit={handleSubmit} id="create-employee">
            <h2>Create Employee</h2>
            <fieldset className='personal-infos'>
                <legend>Personal informations </legend>

                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    ref={inputFirstName}
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <p className='errorMsg'>{errorMsg.firstName}</p>


                <label htmlFor="last-name">Last Name</label>
                <input
                    ref={inputLastName}
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.lastName}</p>

                <DatePicker
                    inputRef={inputDateBirth}
                    labelText='Date of Birth'
                    id='date-of-birth'
                    name='dateBirth'
                    value={formData.birthDate}
                    onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.dateBirth}</p>

                <DatePicker
                    inputRef={inputDateStart}
                    labelText='Start Date'
                    id='start-date'
                    name='dateStart'
                    value={formData.startDate}
                    onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.dateStart}</p>
            </fieldset>


            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input
                    ref={inputStreet}
                    id="street"
                    name='street'
                    type="text"
                    value={formData.street}
                    onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.street}</p>

                <label htmlFor="city">City</label>
                <input
                    ref={inputCity}
                    id="city"
                    name='city'
                    type="text"
                    value={formData.city}
                    onChange={handleChange} />
                <p className='errorMsg'>{errorMsg.city}</p>

                <Menu
                    inputRef={inputState}
                    data={dataStates}
                    text='State'
                    name='state'
                    value={formData.state}
                    onChange={handleChange}//{handleChangeMenu}
                    errorMsg={errorMsg.state}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input
                    ref={inputZipCode}
                    id="zip-code"
                    name='zipCode'
                    type="number"
                    value={formData.zipCode}
                    onChange={handleChange}
                />
                <p className='errorMsg'>{errorMsg.zipCode}</p>

            </fieldset>
            <Menu
                inputRef={inputDepartment}
                data={dataDepartments}
                text='Department'
                name='department'
                value={formData.department}
                onChange={handleChange}//{handleChangeMenu}
                errorMsg={errorMsg.department} />

            <button type='submit' onClick={validateForm} >Add employee</button>
        </form >
        {showModal ? <ModalDialog /> : null}
    </>
}