import React from "react";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = ({ barChartData }) => {
  const data1 = {
    labels: barChartData?.labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: barChartData?.incomeData,
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: barChartData?.expenseData,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      title: "CHART",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-[588px] bg-white rounded-[10px]">
      <h2 className="px-6 py-4">Income - Expense</h2>
      {barChartData && <Bar data={data1} options={options1} />}
      {!barChartData && (
        <div className="flex justify-center items-end   gap-4 w-full ">
          <div className="skeleton h-14 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-14 w-4"></div>
        </div>
      )}
    </div>
  );
};

export default Barchart;
