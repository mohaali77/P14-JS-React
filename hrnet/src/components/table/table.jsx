
import './style/table.css'
import { useState, useMemo } from 'react';
import { useTable } from 'react-table'
import mockData from '../../data/mockData.json'


export const Table = () => {

    const COLUMNS = [
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

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => mockData, [])

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
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
};

export default Table;