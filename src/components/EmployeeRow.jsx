import { useNavigate } from "react-router-dom";

function EmployeeRow({ employee, style }) {
  const navigate = useNavigate();

  return (
    <div
      style={style}
      className="grid grid-cols-5 items-center px-4 border-b bg-white hover:bg-gray-50 cursor-pointer"
      onClick={() => navigate(`/details/${employee.id}`)}
    >
      <div>{employee.id}</div>
      <div>{employee.name}</div>
      <div>{employee.city}</div>
      <div>{employee.salary}</div>
      <div className="text-blue-500">View</div>
    </div>
  );
}

export default EmployeeRow;
