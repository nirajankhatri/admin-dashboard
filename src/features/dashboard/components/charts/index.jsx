import React from "react";
import BarChartContainer from "./components/ProductStockBarChartContainer";
import CategoryStockPieChartContainer from "./components/CategoryStockPieChartContainer";
import GenderPieChartContainer from "./components/GenderPieChartContainer";
import { useSelector } from "react-redux";

const Charts = () => {
  const { users } = useSelector((state) => state.users);
  const { products } = useSelector((state) => state.products);

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
