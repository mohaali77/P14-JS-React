import { Link } from "react-router-dom";

export function EmployeeList() {
    return <>
        <div id="employee-div" class="container">
            <h2>Current Employees</h2>
            <table id="employee-table" class="display"></table>
            <Link to="/">Home</Link>
        </div>
    </>
}