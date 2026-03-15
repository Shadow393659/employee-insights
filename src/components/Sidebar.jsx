import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Employee List", path: "/list" },
    { name: "Analytics", path: "/analytics" },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen p-5">
      <h2 className="text-xl font-bold mb-8">Dashboard</h2>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block p-2 rounded ${
              location.pathname === item.path
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
