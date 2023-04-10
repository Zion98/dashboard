import * as React from "react";
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
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { SingleLineChartData } from "@/types";

interface SingleLineChartProps {
  data: SingleLineChartData;
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

const VerticalLinePlugin = {
  id: "verticalLineAcrossDataPoints", //typescript crashes without id
  afterDatasetDraw: function (chart: ChartJS) {
    if (
      chart.tooltip?.getActiveElements() &&
      chart.tooltip?.getActiveElements().length
    ) {
      const activePoint = chart.tooltip?.getActiveElements()[0];
      const ctx = chart.ctx;
      const x = activePoint.element.x;
      const topY = chart.scales.y.top;
      const bottomY = chart.scales.y.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#0D7CDC";
      ctx.stroke();
      ctx.restore();
    }
  },
};

const options = {
  tension: 0.4,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        display: false,
        color: "#f0f0f0",
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 6,
        display: false,
      },
      beginAtZero: true,
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
        color: "#f0f0f0",
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
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

export const SingleLineChart: React.FunctionComponent<SingleLineChartProps> = ({
  data,
}) => {
  const { labels, values, percentage } = data;

  const refinedData = {
    labels,
    datasets: [
      {
        data: values,
        borderWidth: 2,
        borderColor: "#fff",
        pointRadius: 0, //3.5,
        pointBackgroundColor: "#107EE2",
        pointBorderWidth: 2,
        pointBorderColor: "white",
        pointHoverRadius: 7,
        pointHoverBorderWidth: 3.5,
        pointHoverBorderColor: "#c2ddec",
        pointHoverBackgroundColor: "#107EE2",
        fill: "start",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 384);
          gradient.addColorStop(0, "rgba(129, 159, 253,1)");
          gradient.addColorStop(0.35, "rgba(146, 173, 255,0.5165)");
          gradient.addColorStop(0.7, "rgba(146, 173, 255,0)");
          return gradient;
        },
      },
    ],
  };

  return (
    <Line
      redraw
      options={options}
      data={refinedData}
      plugins={[VerticalLinePlugin]}
    />
  );
};
