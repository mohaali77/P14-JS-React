import { Link } from "react-router-dom";
import './style/EmployeeList.css'
import { useState } from 'react';
import DataTable from 'react-data-table-component'
import mockData from '../../data/mockData.json'

export function EmployeeList() {

    const [data, setData] = useState(mockData)

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: 'lightblue', // Couleur de fond de la ligne d'en-tête
            },
        },
        headCells: {
            style: {
                color: 'darkblue', // Couleur du texte de l'en-tête
            },
        },
        cells: {
            style: {
                backgroundColor: 'lightcyan', // Couleur de fond des cellules
            },
        },
    };

    const columns = [
        {
            name: 'First Name',
            selector: row => row.first_name,
            sortable: true
        },
        {
            name: 'Last Name', selector: row => row.last_name,
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

    const handleFilter = (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const dataFiltered = data.filter(row => {
            // Utilise Object.values pour obtenir toutes les valeurs de l'objet row
            const rowValues = Object.values(row);
            console.log(rowValues);

            // Utilise some pour vérifier si la valeur recherchée est incluse dans au moins l'une des valeurs
            return rowValues.some(value => value.toLowerCase().includes(searchTerm));
        });
        setData(dataFiltered)
    }

    return (
        <>
            <section class="container-employee-list">
                <input type="date" />
                <div><input onChange={handleFilter}
                    className="searchBar" type="text" /></div>

                <h2>Current Employees</h2>
                <div className="container-table"  >
                    <DataTable
                        customStyles={customStyles}
                        columns={columns}
                        data={data}
                        fixedHeader
                        pagination
                        s />
                </div>
            </section>
            <Link to="/">Home</Link>
        </>
    );

}