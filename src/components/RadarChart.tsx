import * as React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

interface SingleLineChartProps {
  data: any;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
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

export const RadarChart: React.FunctionComponent<SingleLineChartProps> = ({
  data,
}) => {
  const { labels, values, percentage } = data;

  const options = {
    datasets: {},
    plugins: {
      legend: {
        display: false,
      },
    },
    scale: {
      ticks: {
        maxTicksLimit: 2,
      },
    },
  };

  return (
    <div className="mb-8 rounded-lg bg-white py-6 px-7">
      <div className="h-44 lg:h-80">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};
