import { Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./pages/CreateEmployee/CreateEmployee";
import { EmployeeList } from "./pages/EmployeeList/EmployeeList";

export default function App() {
  return <Routes>
    <Route path="/" element={<CreateEmployee />} />
    <Route path="/employee-list" element={<EmployeeList />} />
  </Routes>
} 