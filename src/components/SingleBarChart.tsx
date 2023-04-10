import * as React from "react";
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

// import { addCommasToNumber } from "@/utils";
// import { Icon } from "@/components/elements";
import clsx from "clsx";
import { SingleLineChartData } from "@/types";

interface DashBarChartProps {
  data: SingleLineChartData;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 6,
        display: false,
      },
    },
  },
  maxBarThickness: 120,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      intersect: false,
      backgroundColor: "#E3F0FF",
      titleColor: "#032282",
      bodyColor: "#032282",
      padding: {
        x: 15,
        y: 8,
      } as unknown as number,
      titleFont: {
        weight: "600",
        size: 12,
      },
      titleMarginBottom: 15,
      displayColors: false,
      bodyFont: {
        weight: "700",
        size: 14,
      },
    },
  },
};

export const SingleBarChart: React.FunctionComponent<DashBarChartProps> = ({
  data,
}) => {
  const { labels, values, percentage } = data;

  const refinedData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#032282"],
      },
    ],
  };

  return <Bar redraw options={options} data={refinedData} />;
};
