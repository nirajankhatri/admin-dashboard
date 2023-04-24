import React from "react";
import PieChartContainer from "./components/PieChartContainer";

const Charts = ({ products }) => {
  return (
    <div className="chartsContainer">
      <div className="chartWrapper">
        <PieChartContainer products={products} />
      </div>
    </div>
  );
};

export default Charts;
