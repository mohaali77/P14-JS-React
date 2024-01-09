import './style/table.css'
import { useState, useMemo, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'

export const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const storedData = JSON.parse(localStorage.getItem('employee'));
            setData(storedData || []);
        };

        fetchData();
    }, []);

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

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, setPageSize, state, setGlobalFilter, prepareRow } = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter, useSortBy, usePagination)

    const { pageIndex, pageSize, globalFilter } = state

    return <>
        <div className='pageSize_search'>
            <label htmlFor="page-size"></label>
            <select id='page-size' value={pageSize} onChange={e => setPageSize(Number(e.target.value))} >{[10, 25, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                    Show {' ' + pageSize}
                </option>
            ))}</select>
            <label htmlFor="search-bar">Search :{' '}
                <input id='search-bar' type="text"
                    value={globalFilter || ''}
                    onChange={e => setGlobalFilter(e.target.value)} />
            </label>
        </div>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((columns) => (
                            <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>{columns.render('Header')}
                                <span>{' '}{columns.isSorted ? (columns.isSortedDesc ? <i className="fa-solid fa-sort-up"></i> : <i class="fa-solid fa-sort-down"></i>) : ''}</span>
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
            </tbody>
        </table>
        <div className='pageNumber_buttons'>
            <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
            <div className='buttons'>
                <button className="disabled-button" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button className="disabled-button" onClick={() => nextPage()} disabled={!canNextPage}>Next</button >
            </div>
        </div >
    </>
};

export default Table;