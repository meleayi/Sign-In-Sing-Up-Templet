"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const LoginUserDoughnutChart = () => {
  const datasets = {
    datasets: [
      {
        label: "User status",
        data: [100, 445, 250],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Login User", "Register User", "Visit our site page"],
  };
  return (
    <Doughnut
      data={datasets}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        rotation: -0,
        circumference: 360, // 3/4 circle
        plugins: {
          legend: {
            position: "right",

            labels: {
              boxWidth: 20,
              padding: 10,
              font: {
                size: 10,
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0,0,0,0.7)",
            titleFont: { size: 14 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 10,
          },
        },

      }}
      className="max-h-[100px] md:max-h-[150px] lg:max-h-[200px] max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    />
  );
};

export default LoginUserDoughnutChart;
