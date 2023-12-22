import './style/form.css'
import Menu from "../menu/menu";

export function Form() {
    return <>
        <form action="#" id="create-employee">
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

                <label for="state">State</label>
                <select required name="state" id="state"></select>

                <label for="zip-code">Zip Code</label>
                <input required id="zip-code" type="number" />
            </fieldset>
            <Menu />
            <button onclick="saveEmployee()">Add employee</button>
        </form>
    </>
}