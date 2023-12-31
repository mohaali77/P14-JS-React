
import './style/table.css'
import { useState, useMemo } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
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

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, setPageSize, state, setGlobalFilter, prepareRow } = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter, useSortBy, usePagination)

    const { pageIndex, pageSize, globalFilter } = state

    return <>
        <span>Search :{' '}
            <input type="text"
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)} /></span>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((columns) => (
                            <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>{columns.render('Header')}
                                <span>{columns.isSorted ? (columns.isSortedDesc ? '1' : "2") : ''}</span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
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
        <div>
            <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button >
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} ></select>
        </div >
    </>
};

export default Table;