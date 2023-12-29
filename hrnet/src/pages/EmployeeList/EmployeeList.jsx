import { Link } from "react-router-dom";
import './style/EmployeeList.css'
import { useState } from 'react';
import DataTable from 'react-data-table-component'

export function EmployeeList() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('employee')))

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true
        },
        {
            name: 'Last Name', selector: row => row.lastName,
            sortable: true
        },
        {
            name: 'Date of Birth', selector: row => row.dateBirth,
            sortable: true
        },
        {
            name: 'Start Date', selector: row => row.dateStart,
            sortable: true
        },
        {
            name: 'Street', selector: row => row.street,
            sortable: true
        },
        {
            name: 'City', selector: row => row.city,
            sortable: true
        },
        {
            name: 'State', selector: row => row.state,
            sortable: true
        },
        {
            name: 'Zip Code', selector: row =>
                row.zipCode,
            sortable: true,

        },
        {
            name: 'Department', selector: row => row.department,
            sortable: true
        },
    ];

    const handleFilter = () => {
        const dataFiltered = records.filter(row => {
        })
        setData(dataFiltered)
    }

    return (
        <>
            <div><input className="searchBar" type="text" /></div>

            <h2>Current Employees</h2>
            <DataTable
                onChangePage={handleFilter}
                columns={columns}
                data={data}
                fixedHeader
                pagination
                s />
            <Link to="/">Home</Link>
        </>
    );

}