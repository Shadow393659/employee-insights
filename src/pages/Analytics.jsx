import { useEffect, useState } from "react";
import { fetchEmployees } from "../api/employeeApi";
import SalaryChart from "../components/SalaryChart";
import CityMap from "../components/CityMap";

function Analytics() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEmployees();

      setEmployees(data);
    };

    loadData();
  }, []);

  const auditImage = localStorage.getItem("auditImage");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Employee Analytics</h1>

      {auditImage && (
        <img src={auditImage} alt="audit" className="w-96 border" />
      )}

      <SalaryChart data={employees} />

      <CityMap data={employees} />
    </div>
  );
}

export default Analytics;
