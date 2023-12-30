
import './style/table.css'
import { useState } from 'react';
import { useTable } from 'react-table'
import mockData from '../../data/mockData.json'


export const Table = () => {

    const [data, setData] = useState(mockData)
    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstName'
        }, {
            Header: 'Last Name',
            accessor: 'lastName'
        }, {
            Header: 'Date of Birth',
            accessor: 'dateBirth'
        }, {
            Header: 'Start Date',
            accessor: 'dateStart'
        }, {
            Header: 'Street',
            accessor: 'street'
        }, {
            Header: 'City',
            accessor: 'city'
        }, {
            Header: 'State',
            accessor: 'state'
        }, {
            Header: 'Zip Code',
            accessor: 'zipCode'
        }, {
            Header: 'Department',
            accessor: 'department'
        },
    ]

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((columns) => (
                            <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
};

export default Table;