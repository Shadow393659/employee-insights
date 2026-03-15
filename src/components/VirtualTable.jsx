import useVirtualScroll from "../hooks/useVirtualScroll";
import EmployeeRow from "./EmployeeRow";

function VirtualTable({ data }) {
  if (!Array.isArray(data)) {
    return <div className="p-4">Loading employees...</div>;
  }

  const { visibleData, totalHeight, offsetY, handleScroll } =
    useVirtualScroll(data);

  return (
    <div className="h-[500px] overflow-y-auto border" onScroll={handleScroll}>
      <div style={{ height: totalHeight, position: "relative" }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleData.map((emp) => (
            <EmployeeRow key={emp.id} employee={emp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VirtualTable;
