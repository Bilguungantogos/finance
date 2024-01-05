import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Piechartinfo from "./piechartinfo";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = ({ categoryData }) => {
  const data2 = {
    labels: categoryData?.labels,
    datasets: [
      {
        data: categoryData?.data,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const piedata = [
    {
      dotcolorsrc: "./dots/bluedot.svg",
      exname: "Bills",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./dots/pinkdot.svg",
      exname: "Food",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./dots/lightbrown.svg",
      exname: "Shopping",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./dots/aqua.svg",
      exname: "Insurance",
      value: 5000000,
      percent: "15.50%",
    },
    {
      dotcolorsrc: "./dots/orange.svg",
      exname: "Clothing",
      value: 5000000,
      percent: "15.50%",
    },
  ];
  return (
    <div className="w-[588px] bg-white px-6 rounded-[10px]">
      <div className="flex justify-between items-center">
        <h2 className="px-6 py-4">Income - Expense</h2>
        <p>Jun 1 - Nov 30</p>
      </div>
      <div className="flex items-center py-8 px-6 gap-[47px]">
        <div className="w-[156px] h-[156px]">
          {categoryData && <Doughnut options={options2} data={data2} />}
          {!categoryData && (
            <div className="flex justify-center items-center gap-4 w-full h-full">
              <div className="skeleton h-24 w-24 rounded-full"></div>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full ml-4">
          {piedata.map((data) => {
            return <Piechartinfo data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Piechart;
