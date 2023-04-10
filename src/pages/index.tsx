import {
  Card,
  DebouncedInput,
  MultipleDataLineChart,
  RadarChart,
  SingleBarChart,
  SingleLineChart,
} from "@/components";
import { useState } from "react";

export default function Home() {
  const [searchFilter, setSearchFilter] = useState<string>();

  const doubleLineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [
      {
        label: "Income",
        data: [34, 45, 2, 43, 12, 43, 56, 23, 54, 67, 43, 23],
      },
      {
        label: "Expenses",
        data: [14, 25, 2, 23, 21, 54, 67, 54, 87, 98, 27, 83],
      },
    ],
    direction: "up",
    percentage: "4.6",
    totalAmount: "804959",
  };

  const singleLineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [34, 45, 2, 43, 12, 43, 56, 23, 54, 67, 43, 23],
    direction: "up",
    percentage: "4.6",
    totalAmount: "804959",
  };

  const radarData = {
    labels: ["Shoes", "Jeans", "Accessories", "T-shirts", "Outwear"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 29, 33, 45, 53],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointBorderWidth: 0,
      },
      {
        label: "# of Votes",
        data: [6, 36, 43, 55, 69, 83],
        backgroundColor: "rgba(74, 48, 54, 0.2)",
        borderColor: "#6b63ff",
        borderWidth: 2,
        pointBorderWidth: 0,
      },
    ],
  };

  return (
    <div className="bg-[#f4f8fc] p-4 ">
      <div className="flex justify-between">
        <DebouncedInput
          value={searchFilter ?? ""}
          onChange={(value) => setSearchFilter(String(value))}
          placeholder={"Search"}
        />

        <div className="text-sm">
          <p>jamesbrown@gmail.com</p>
          <p className="text-[#82878c] font-semibold">Admin</p>
        </div>
      </div>

      <div className=" bg-[#fff] text-sm font-semibold mt-4 rounded-md">
        <div className="px-4 flex items-center justify-between py-6 border-b border-[#f4f8fc]">
          <p>Sales Overview</p>
          <button className="py-2 px-10 rounded-[6px] bg-gradientBlue text-white text-[.8rem]">
            Add Offer
          </button>
        </div>
        <MultipleDataLineChart data={doubleLineData} chartLabel="" />
      </div>

      <div className="grid grid-cols-4 gap-x-6 w-full ">
        <Card title={"Daily Income"} amount={345}>
          <SingleLineChart data={singleLineData} />
        </Card>
        <Card title={"Daily Expense"} amount={345}>
          <SingleBarChart data={singleLineData} />
        </Card>
        <Card title={"Weekly Income"} amount={345}>
          <SingleLineChart data={singleLineData} />
        </Card>
        <Card title={"Weekly Expense"} amount={345}>
          <SingleBarChart data={singleLineData} />
        </Card>
      </div>

      <div className="flex gap-x-4 my-4">
        <div className="w-full basis-2/5 bg-white rounded-md">
          <h2 className="text-gray m-4">Top Selling Categories</h2>
          <RadarChart data={radarData} />
        </div>

        <div className="w-full basis-3/5 bg-white rounded-md p-4">
          <div>
            <p>Latest Added Products</p>
          </div>
          <table className="w-full border-collapse">
            {/* <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>Row 1 Column 1</td>
                <td>Row 1 Column 2</td>
                <td>Row 1 Column 3</td>
                <td>Row 1 Column 4</td>
              </tr>
              <tr>
                <td>Row 2 Column 1</td>
                <td>Row 2 Column 2</td>
                <td>Row 2 Column 3</td>
                <td>Row 2 Column 4</td>
              </tr>
              <tr>
                <td>Row 3 Column 1</td>
                <td>Row 3 Column 2</td>
                <td>Row 3 Column 3</td>
                <td>Row 3 Column 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
