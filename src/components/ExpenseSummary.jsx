import React from "react";
import Group1 from "../assets/Group1.svg";
import Group2 from "../assets/Group2.svg";
import Group3 from "../assets/Group3.svg";

const ExpenseSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
        <div className="flex items-center space-x-4">
          <img src={Group1} alt="Total Expenses" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Expenses</h3>
            <p className="text-2xl font-bold text-black">₹3,945.55</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
        <div className="flex items-center space-x-4">
          <img src={Group2} alt="Highest Category" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Highest Category</h3>
            <p className="text-2xl font-bold text-black">Shopping</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
        <div className="flex items-center space-x-4">
          <img src={Group3} alt="Total Entries" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Entries</h3>
            <p className="text-2xl font-bold text-black">16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;