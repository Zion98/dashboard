import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TinyColor } from "@ctrl/tinycolor";
// import { MultipleDashLineChartData } from '@/types';
// import { Icon } from '@/components/elements';
// import { addCommasToNumber } from '@/utils';
import clsx from "clsx";
import { MultipleLinesChartData } from "@/types";
import { SelectBox } from "./SelectBox";
import { ArrowLongDownIcon, ArrowLongUpIcon } from "@heroicons/react/20/solid";

interface MultipleDataLineChartProps {
  data: MultipleLinesChartData;
  chartLabel: React.ReactNode;
  isCurrency?: boolean;
  filters?: boolean;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  tension: 0.4,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        maxTicksLimit: 6,
      },
      beginAtZero: true,
    },
    x: {
      grid: {
        drawBorder: false,
        drawTicks: false,
        color: "#E5E5E5",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      intersect: false,
      backgroundColor: "#032282",
      mode: "index" as const,
      padding: {
        x: 16,
        y: 9,
      } as unknown as number,
      titleFont: {
        weight: "500",
        size: 12,
      },
      titleMarginBottom: 15,
      boxPadding: 6,
      bodyFont: {
        weight: "600",
        size: 14,
      },
      bodySpacing: 8,
    },
  },
};

const yearOptions = [
  { label: "2011", value: 32 },
  { label: "2012", value: 31 },
  { label: "2013", value: 343 },
  { label: "2014", value: 3345 },
  { label: "2015", value: 3654 },
  { label: "2016", value: 37654 },
  { label: "2017", value: 3345 },
  { label: "2018", value: 38765 },
  { label: "2019", value: 3345 },
  { label: "2020", value: 36543 },
  { label: "2011", value: 31234 },
  { label: "2022", value: 3654 },
];

export const MultipleDataLineChart: React.FunctionComponent<
  MultipleDataLineChartProps
> = ({ data, chartLabel, filters = false }) => {
  const { labels, values, percentage, direction, totalAmount } = data;

  const colors = ["#107EE2", "#FF0000"];
  const [selectedYear, setSelectedYear] = React.useState<{
    label: string;
    value: number;
  }>(yearOptions[0]);

  if (!values) {
    return <p>Chart data not available</p>;
  }

  const refinedData = {
    labels,
    datasets: values?.map(({ label, data }, i) => {
      //   console.log({ label, data });
      return {
        label,
        data,
        borderWidth: 2,
        borderColor: colors[i],
        pointRadius: 3.5,
        pointBackgroundColor: colors[i],
        pointBorderWidth: 2,
        pointBorderColor: "white",
        pointHoverRadius: 7,
        pointHoverBorderWidth: 3.5,
        pointHoverBorderColor: new TinyColor(colors[i]).lighten(40).toString(),
        pointHoverBackgroundColor: colors[i],
      };
    }),
  };

  return (
    <div className="mb-8 rounded-lg bg-white py-6 px-7">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex w-full gap-x-2 items-center">
            <p className="mb-2 text-2xl font-semibold ">
              {"$"}
              {totalAmount}
            </p>

            <div className="text-xs font-normal flex items-center gap-x-2">
              {direction === "up" ? (
                <span className="">
                  <ArrowLongUpIcon className=" h-8 w-8 p-2 bg-[#e5f6f5] text-green-500 rounded-full" />
                </span>
              ) : direction === "down" ? (
                <span className="rotate-180">
                  <ArrowLongDownIcon className=" h-8 w-8 p-2 bg-[#e5f6f5] text-red-500 rounded-full" />
                </span>
              ) : (
                ""
              )}
              <span
                className={clsx(
                  "font-semibold inline-block",
                  direction === "up"
                    ? "text-green-500"
                    : direction === "down"
                    ? "text-red-600"
                    : ""
                )}>
                {percentage}%{" "}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <div className="flex items-center justify-between gap-x-2">
              <span className="align-middle inline-block h-[8px] w-[8px] bg-[#107EE2] rounded-full"></span>
              <span className="align-middle inline-block">Income</span>
            </div>

            <div className="flex items-center justify-between gap-x-2">
              <span className="align-middle inline-block h-[8px] w-[8px] bg-[#FF0000] rounded-full"></span>
              <span className="align-middle inline-block">Expenses</span>
            </div>

            <SelectBox
              setSelectedYear={setSelectedYear}
              selectedYear={selectedYear}
              yearOptions={yearOptions}
            />
          </div>
        </div>
      </div>

      <div className="h-44 lg:h-80">
        <Line redraw options={options} data={refinedData} />
      </div>
    </div>
  );
};
