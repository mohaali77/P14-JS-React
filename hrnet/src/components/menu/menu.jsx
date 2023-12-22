import './style/menu.css'


export default function Menu({ className, name, id, forName, text }) {

    return <>
        <label className={className} for={forName}>{text}</label>
        <select name={name} id={id}>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
    </>
}