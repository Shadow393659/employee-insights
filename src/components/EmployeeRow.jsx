    import { useNavigate } from "react-router-dom";
    function EmployeeRow({ employee, style }) {
    const navigate = useNavigate();

    return (
        <div
        style={style}
        className="grid grid-cols-5 items-center px-4 border-b bg-white hover:bg-gray-50 cursor-pointer"
        onClick={() => navigate(`/details/${employee.id}`)} // employee[3] is ID
        >
        <h1 className="text-blue-500">{employee.name}</h1> {/* Name */}
        <div className="text-blue-500">{employee.position}</div> {/* Position */}
        <div className="text-blue-500">{employee.city}</div> {/* City */}
        <div className="text-blue-500"    >{employee.id}</div> {/* ID */}
        <div className="text-blue-500">View</div>
        </div>
    );
    }

    export default EmployeeRow;
