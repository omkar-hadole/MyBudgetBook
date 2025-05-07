import React, { useState } from "react";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

const ExpenseList = () => {
  const demoExpenses = [
    {
      id: "1",
      description: "Coffee at Starbucks",
      category: "food",
      date: "2025-05-06",
      amount: 5.0,
    },
    {
      id: "2",
      description: "Taxi ride to airport",
      category: "transport",
      date: "2025-05-05",
      amount: 20.0,
    },
    {
      id: "3",
      description: "Movie ticket",
      category: "entertainment",
      date: "2025-05-04",
      amount: 12.0,
    },
  ];

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

  const filteredExpenses = demoExpenses.filter(
    (expense) => categoryFilter === "all" || expense.category === categoryFilter
  );

  const sortedExpenses = [...filteredExpenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleDelete = (id) => {
    toast.success(`Deleted expense with id: ${id}`);
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
          <option value="all">All categories</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseList;