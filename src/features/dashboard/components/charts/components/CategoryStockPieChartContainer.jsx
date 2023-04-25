import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#F97B22",
  "#ADA2FF",
  "#FF8787",
  "#1F8A70",
  "#227C70",
  "#0081C9",
];

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

const CategoryStockPieChartContainer = ({ products }) => {
  const categoryStocks = {};

  products.forEach((product) => {
    const { category, stock } = product;

    if (category in categoryStocks) {
      categoryStocks[category] += stock;
    } else {
      categoryStocks[category] = stock;
    }
  });

  const result = Object.entries(categoryStocks).map(
    ([category, stock], index) => {
      return { category, stock, color: COLORS[index] };
    }
  );

  console.log(result);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={result}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="stock"
          >
            {result.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="CategoryStockPieChartIndex">
        {result.map((item) => {
          return (
            <div key={item.category}>
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: item.color,
                }}
              ></span>
              {item.category}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryStockPieChartContainer;
