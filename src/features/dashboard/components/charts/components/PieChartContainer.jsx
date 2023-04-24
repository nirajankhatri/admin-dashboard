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

const PieChartContainer = ({ products }) => {
  const categoryArray = [];
  // products.forEach((product) => {
  //   if (!categoryArray.includes(product.category)) {
  //     categoryArray.push(product.category);
  //   }
  // });
  // console.log(categoryArray);

  products.forEach((product) => {
    categoryArray.forEach((category) => {
      if (categoryArray.length > 0) {
        if (category.category == product.category) {
          category.stock += product.stock;
        } else {
          categoryArray.push({
            category: product.category,
            stock: product.stock,
          });
        }
      } else {
        categoryArray.push({
          "category": product.category,
          "stock": product.stock,
        });
      }
    });
  });

  console.log(categoryArray);

  return (
    <>
      <ResponsiveContainer>
        <BarChart
          data={products}
          margin={{
            top: 5,
            right: 30,
            left: 20,
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
          <Bar dataKey="stock" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartContainer;
