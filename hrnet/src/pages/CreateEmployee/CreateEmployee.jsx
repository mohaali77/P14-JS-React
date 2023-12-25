import { Link } from "react-router-dom";
import './style/CreateEmployee.css'
import { Form } from "../../components/form/form";
import { ModalDialog } from "../../components/modal-dialog/modal-dialog";


export function CreateEmployee() {
    return <>
        <section className="container">
            <Form />
            {//<ModalDialog />
            }
            <Link to='/employee-list'>View Current Employees</Link>
        </section>
    </>
}

