import React, { useState } from "react";
import { BarChart, PieChart } from "lucide-react";

const ExpenseChart = () => {
  const [chartType, setChartType] = useState("pie");

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-[19px] font-semibold text-[#333E47] mb-4">
        Expenses by category
      </h2>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setChartType("pie")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "pie"
              ? "bg-expense text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <PieChart size={18} className="mr-2" />
          <span>Pie Chart</span>
        </button>
        <button
          onClick={() => setChartType("bar")}
          className={`flex items-center cursor-pointer px-4 py-2 rounded-md transition-all ${
            chartType === "bar"
              ? "bg-expense text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <BarChart size={18} className="mr-2" />
          <span>Bar Chart</span>
        </button>
      </div>

      <div className="text-center text-gray-400">
        {chartType === "pie" ? (
          <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
            Pie Chart Preview
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
            Bar Chart Preview
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseChart;