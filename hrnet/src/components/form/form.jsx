import './style/form.css'
import Menu from "../menu/menu";
import { statesArray, departmentsArray } from '../../data/data';
import { useState, useRef, useEffect } from 'react';
import { DatePicker } from '../date-picker/date-picker';
import ModalComponent from 'mohaali-react-modal-component'

export function Form() {

    //Refs
    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputDateBirth = useRef();
    const inputDateStart = useRef();
    const inputStreet = useRef();
    const inputCity = useRef();
    const inputState = useRef();
    const inputZipCode = useRef();
    const inputDepartment = useRef();

    //States
    const [modalOpen, setModalOpen] = useState(false);
    const [employeeArray, setEmployeeArray] = useState([]);
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


    useEffect(() => {

        const existingData = JSON.parse(localStorage.getItem('employee'));

        //Si le localStorage existe, alors on ajoute le tableau dans le state employeeArray, 
        //sinon, on définit le localStorage avec un tableau vide
        if (existingData) {
            setEmployeeArray(existingData);
        } else {
            localStorage.setItem('employee', JSON.stringify([]));
        }

    }, [])

    //fonction qui permet de vérifier les données du formulaire 
    const validateForm = (e) => {
        let isFormValid = true

        const newErrors = { firstName: '', lastName: '', dateBirth: '', dateStart: '', street: '', city: '', zipCode: '', state: '', department: '' };

        const regexFirstName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{2,}$/;
        const regexLastName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{2,}$/;
        const regexCity = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
        const regexStreet = /^[a-zA-Z0-9\s',.-]{2,}$/;
        const regexZipcode = /^\d{5}(?:-\d{4})?$/;

        //si tableau les champs sont vides, ou regex incorrect, on modifie le message d'erreur correspondant, et on définit isFormValid à false
        if (formData.firstName.trim() === '' || regexFirstName.test(formData.firstName) === false) { newErrors.firstName = "Invalid Firstname"; isFormValid = false }
        if (formData.lastName.trim() === '' || regexLastName.test(formData.lastName) === false) { newErrors.lastName = "Invalid lastName"; isFormValid = false }
        if (formData.dateBirth.trim() === '') { newErrors.dateBirth = "Invalid Date of Birth"; isFormValid = false }
        if (formData.dateStart.trim() === '') { newErrors.dateStart = "Invalid Date of Start"; isFormValid = false }
        if (formData.street.trim() === '' || regexStreet.test(formData.street) === false) { newErrors.street = "Invalid Street"; isFormValid = false }
        if (formData.city.trim() === '' || regexCity.test(formData.city) === false) { newErrors.city = "Invalid City"; isFormValid = false }
        if (formData.zipCode.trim() === '' || regexZipcode.test(formData.zipCode) === false) { newErrors.zipCode = "Invalid Zip Code"; isFormValid = false }
        if (formData.department.trim() === '') { newErrors.department = "Invalid Department"; isFormValid = false }
        if (formData.state.trim() === '') { newErrors.state = "Invalid State"; isFormValid = false }

        //on set les message d'erreur avec le nouveau tableau. 
        setErrorMsg(newErrors)

        //on retourne isFormValid pour définir le boleen de la fonction
        return isFormValid
    }

    //fonction pour soumettre formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        //si la fonction validateForm est true, alors on créer un objet qui récupère toute les données du formulaire
        if (validateForm()) {
            setModalOpen(true);
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

            //On met à jour le localStorage avec les nouvelles données récupérées
            setEmployeeArray((prevArray) => {
                const updatedArray = [...prevArray, formDataObject];
                localStorage.setItem('employee', JSON.stringify(updatedArray));
                return updatedArray;
            });

            //une fois le formulaire soumis, on reinitialise les valeurs du formulaire
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

            console.log('Formulaire soumis avec succès !');
        } else {
            console.log('no');
        }
    };

    //fonction permettant de récupérer les nouvelle valeurs insérer lors d'un changement dans un input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData.state);
    };

    /*const handleChangeMenu = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData.state);
    }*/

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
                    data={statesArray}
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
                data={departmentsArray}
                text='Department'
                name='department'
                value={formData.department}
                onChange={handleChange}//{handleChangeMenu}
                errorMsg={errorMsg.department} />

            <button type='submit' onClick={validateForm} >Add employee</button>
        </form >

        <ModalComponent
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            modalContent={'Employee created!'} />

    </>
}