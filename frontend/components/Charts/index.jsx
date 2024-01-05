import React, { useEffect } from "react";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import { useState } from "react";
import myAxios from "@/utils/axios";

const Charts = () => {
  const [barChartData, setBarChartData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  const getChartData = async () => {
    try {
      const {
        data: { barChart, doughnutChart },
      } = await myAxios.get(
        "/transactions/chartdata/b0fff3b0-cf44-4605-818e-d94e250d372f"
      );
      console.log("CHART-DATA", barChart);
      console.log("CHART-DATA", doughnutChart);

      setCategoryData(doughnutChart);
      setBarChartData(barChart);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("E2========");
    getChartData();
  }, []);

  return (
    <div className="flex mt-6 gap-6 justify-center">
      <Barchart barChartData={barChartData} />
      <Piechart categoryData={categoryData} />
    </div>
  );
};

export default Charts;
