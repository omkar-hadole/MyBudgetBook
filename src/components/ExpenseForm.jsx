import React from "react";
import toast from "react-hot-toast";

const ExpenseForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const amount = parseFloat(event.target.amount.value);
    const category = event.target.category.value;
    const date = event.target.date.value;
    if (!description || !amount || !category || !date) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Expense added successfully!");
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-expense-dark mb-6 text-center">
        Add New Expense
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="What did you spend on?"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expense-light focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="0.00"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expense-light focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 text-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expense-light focus:border-transparent transition-all"
          >
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="food">Food & Dining</option>
            <option value="transport">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="shopping">Shopping</option>
            <option value="utilities">Utilities</option>
            <option value="health">Health & Medical</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-4 py-2 text-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expense-light focus:border-transparent transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-expense text-white py-2 rounded-md hover:bg-expense-dark font-medium focus:outline-none focus:ring-2 focus:ring-expense-light transition-all"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
