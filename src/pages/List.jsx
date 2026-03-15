import { useEffect, useState } from "react";
import { fetchEmployees } from "../api/employeeApi";
import VirtualTable from "../components/VirtualTable";

function List() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEmployees();

      setEmployees(data);
    };

    loadData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>

      <VirtualTable data={employees} />
    </div>
  );
}

export default List;
    