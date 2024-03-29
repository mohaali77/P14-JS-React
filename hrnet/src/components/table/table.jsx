import './style/table.css'
import { useState, useMemo, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'

export const Table = () => {

    const [data, setData] = useState([]);
    const [entries, setEntries] = useState('');

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

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, gotoPage, pageCount, setPageSize, state, setGlobalFilter, prepareRow } = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter, useSortBy, usePagination)

    const { pageIndex, pageSize, globalFilter } = state

    const firstEntry = pageIndex * pageSize + 1;
    const lastEntry = Math.min((pageIndex + 1) * pageSize, data.length);

    useEffect(() => {
        setEntries(`Showing ${firstEntry} to ${lastEntry} entries of ${data.length} entries`);
    }, [firstEntry, lastEntry, data.length]);

    return <>
        <div className='pageSize_search'>
            <label htmlFor="page-size"></label>
            <select
                id='page-size'
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))
                } >{[10, 25, 50].map(pageSize => (
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
        <div className='entries_pagination'>
            <div className='showingEntries'>{entries}</div>
            <div className='pageNumber_buttons'>
                <span>Page{' '}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}</span>
                <span>
                    | Go to page : {" "}<input type='number' defaultValue={pageIndex + 1} onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }} style={{ width: '50px' }} />
                </span>
                <div className='buttons'>
                    <button className="disabled-button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                    <button className="disabled-button" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button className="disabled-button" onClick={() => nextPage()} disabled={!canNextPage}>Next</button >
                    <button className="disabled-button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                </div>
            </div >
        </div>
    </>
};

export default Table;

