import { Link } from "react-router-dom";
import './style/EmployeeList.css'
import Table from "../../components/table/table";

export function EmployeeList() {

    return <>
        <section className="container-employee-list">
            <h2>Current Employees</h2>
            <div className="container-table">
                <Table />
            </div>
            <Link to="/">Home</Link>
        </section>
    </>

}