import React, { useState, useRef, useEffect } from "react";
import Logo from '../assets/Logo.svg';
import Profile from "../assets/Profile.svg";
import Actions from "../assets/Actions.svg";
import { Toaster } from "react-hot-toast";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const { session, signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  const handleLogout = async () => {
    await signOut();
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-[#ECEFF2]">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "8px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <header className="bg-white shadow-sm sticky top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center md:justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img src={Logo} alt="LOGO" />
              <h1 className="text-[19px] font-bold text-black">MyBudgetBook</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <img src={Actions} alt="Notification" />
              <div className="relative" ref={profileRef}>
                <img
                  src={Profile}
                  alt="Profile"
                  className="cursor-pointer"
                  onClick={() => setDropdownOpen((open) => !open)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4 flex flex-col items-center">
                    <div className="mb-2 text-gray-800 font-semibold text-sm truncate w-full text-center">
                      {session?.user?.email || 'No user'}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 mt-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 justify-center">
            <img src={Logo} alt="" className="w-7" />
            <p className="text-center text-gray-500 text-sm">
              MyBudgetBook &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
