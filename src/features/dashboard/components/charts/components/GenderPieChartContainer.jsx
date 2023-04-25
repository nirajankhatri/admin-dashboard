import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const GenderPieChartContainer = ({ users }) => {
  // initialize counts to zero
  let maleCount = 0;
  let femaleCount = 0;
  let otherCount = 0;

  // count users by gender
  for (let user of users) {
    if (user.gender === "male") {
      maleCount++;
    } else if (user.gender === "female") {
      femaleCount++;
    } else {
      otherCount++;
    }
  }

  // create an array of objects with gender and count properties
  const genderCounts = [
    { gender: "male", count: maleCount, color: "#0088FE" },
    { gender: "female", count: femaleCount, color: "#00C49F" },
    { gender: "other", count: otherCount, color: "#FFBB28" },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={genderCounts}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            {genderCounts.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="GenderPieChartIndex">
        {genderCounts.map((gender) => {
          return (
            <div key={gender.gender}>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: gender.color,
                }}
              ></span>
              {gender.gender}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GenderPieChartContainer;
