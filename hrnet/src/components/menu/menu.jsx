import './style/menu.css'


export default function Menu() {
    return <>
        <label className='label-department' for="department">Department</label>
        <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
    </>
}