import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#ECEFF2]">
      <header className="bg-white shadow-sm sticky top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center md:justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer">
              <h1 className="text-[19px] font-bold text-black">MyBudgetBook</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;