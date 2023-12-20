import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export function CreateEmployee() {
    return <>
        <section className="container">
            <Link to='/employee-list'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label for="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label for="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset class="address">
                    <legend>Address</legend>

                    <label for="street">Street</label>
                    <input id="street" type="text" />

                    <label for="city">City</label>
                    <input id="city" type="text" />

                    <label for="state">State</label>
                    <select name="state" id="state"></select>

                    <label for="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <Menu />
            </form>
        </section>
    </>
}

