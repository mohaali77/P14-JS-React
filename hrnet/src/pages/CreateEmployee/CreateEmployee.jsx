import { Link } from "react-router-dom";
import './style/CreateEmployee.css'
import Form from "../../components/form/form";

export function CreateEmployee() {
    return <>
        <section className="container">
            <Form />
            <Link to='/employee-list'>View Current Employees</Link>
        </section>
    </>
}
