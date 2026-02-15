import { useEffect, useState } from "react";
import api from "../api/axios";

interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
  department: string;
}

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    api
      .get("/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => {
        console.error("Failed to fetch employees:", err);
        setError("Failed to fetch employees: " + err.message);
      });
  }, []);

  error && <div>{error}</div>;

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map((employee: Employee) => (
          <li key={employee.id}>
            {employee.firstname} {employee.lastname} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
}
