import React from "react";
import BarChartContainer from "./components/ProductStockBarChartContainer";
import PieChartContainer from "./components/GenderPieChartContainer";
import CategoryStockPieChartContainer from "./components/CategoryStockPieChartContainer";
import GenderPieChartContainer from "./components/GenderPieChartContainer";

const Charts = ({ products, users }) => {
  return (
    <div className="chartsContainer">
      <div className="barChartWrapper">
        <BarChartContainer products={products} />
      </div>
      <div className="pieChartWrapper">
        <div>
          <GenderPieChartContainer users={users} />
        </div>
        <div>
          <CategoryStockPieChartContainer products={products} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
