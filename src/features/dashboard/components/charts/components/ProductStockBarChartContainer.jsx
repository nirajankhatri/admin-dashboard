import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartContainer = ({ products }) => {

  return (
    <>
      <ResponsiveContainer>
        <BarChart
          data={products}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="title"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="stock" fill="#0b2447" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartContainer;
