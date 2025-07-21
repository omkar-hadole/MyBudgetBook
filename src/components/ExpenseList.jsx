import React, { useState } from "react";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

const formatCurrency = (amount) => {
  return `₹${amount.toFixed(2)}`;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const getCategoryTextColor = (category) => {
  const colors = {
    food: "text-green-600",
    transport: "text-blue-600",
    entertainment: "text-yellow-600",
    shopping: "text-purple-600",
    utilities: "text-pink-600",
    health: "text-red-600",
    other: "text-gray-600",
  };
  return colors[category] || "text-gray-600";
};

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      description: "Coffee at Starbucks",
      category: "food",
      date: "2025-05-06",
      amount: 500.0,
    },
    {
      id: "2",
      description: "Taxi ride to airport",
      category: "transport",
      date: "2025-05-05",
      amount: 200.0,
    },
    {
      id: "3",
      description: "Movie ticket",
      category: "entertainment",
      date: "2025-05-04",
      amount: 120.0,
    },
  ]);

  const [categoryFilter, setCategoryFilter] = useState("all");

  const categoryOptions = [
    { value: "food", label: "Food & Dining" },
    { value: "transport", label: "Transportation" },
    { value: "entertainment", label: "Entertainment" },
    { value: "shopping", label: "Shopping" },
    { value: "utilities", label: "Utilities" },
    { value: "health", label: "Health & Medical" },
    { value: "other", label: "Other" },
  ];

  const filteredExpenses = expenses.filter(
    (expense) => categoryFilter === "all" || expense.category === categoryFilter
  );

  const sortedExpenses = [...filteredExpenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
    toast.success("Expense deleted successfully");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-expense-dark">
          Expense History
        </h2>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-1 rounded-md border text-gray-600 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-expense-light focus:border-transparent"
        >
          <option value="all">All category</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {sortedExpenses.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
          <p className="mb-2">No expenses found</p>
          {categoryFilter !== "all" && (
            <p>Try changing the category filter or add new expenses.</p>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <div className="p-5 text-[#516778] text-[15px]">
              Check your last transactions
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/5">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-0" />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedExpenses.map((expense) => (
                  <tr
                    key={expense.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-[13px] font-bold uppercase">
                        {expense.description
                          .split(" ")
                          .slice(0, 2)
                          .map((word) => word.charAt(0))
                          .join("")}
                      </div>
                      {expense.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`${getCategoryTextColor(
                          expense.category
                        )} font-medium`}
                      >
                        {expense.category.charAt(0).toUpperCase() +
                          expense.category.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatDate(expense.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      - {formatCurrency(expense.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDelete(expense.id)}
                        className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                      >
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
