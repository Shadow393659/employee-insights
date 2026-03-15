function SalaryChart({ data  }) {
  if (data===null) return null;

  const citySalary = {};

  data.forEach((emp) => {
    const city = emp.city;

    const salary = Number(emp.salary.replace(/[$,]/g, ""));

    if (!citySalary[city]) {
      citySalary[city] = 0;
    }

    citySalary[city] += salary;
  });

  const cities = Object.keys(citySalary);
  const salaries = Object.values(citySalary);

  const maxSalary = Math.max(...salaries);

  return (
    <svg width="600" height="400" className="border">
      {cities.map((city, i) => {
        const barHeight = (salaries[i] / maxSalary) * 300;

        return (
          <g key={city}>
            <rect
              x={i * 80 + 50}
              y={350 - barHeight}
              width="40"
              height={barHeight}
              fill="#3b82f6"
            />

            <text x={i * 80 + 50} y={370} fontSize="10">
              {city}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default SalaryChart;
