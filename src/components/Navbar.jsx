import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ onOpenModal }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-50 shadow-sm fixed top-0 py-1.5 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <img src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg" alt="logo" className="h-7" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center flex-1 justify-between ml-10">
          <ul className="flex items-center gap-6 text-gray-800 font-semibold text-[15px]">
            <li
              className="hover:text-blue-600 cursor-pointer hover:underline underline-offset-4"
              onClick={() => {
                const section = document.getElementById('payments-section');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Payments
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer hover:underline underline-offset-4"
              onClick={() => {
                const section = document.getElementById('payments-part');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              benefits
            </li>
            <li className="hover:text-blue-600 cursor-pointer hover:underline underline-offset-4" onClick={() => {
              const section = document.getElementById('payments-section');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}>Banking</li>
            <li
              className="hover:text-blue-600 cursor-pointer hover:underline underline-offset-4"
              onClick={() => {
                const section = document.getElementById("payments-part");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Why Razorpay?
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-5 ml-8">
            <button
              className="px-6 py-1 border-blue-600 border rounded-md hover:bg-blue-50  bg-white shadow-sm hover:border-blue-700 font-medium transition"
              onClick={() => onOpenModal("login")}
            >
              Login
            </button>

            <button
              onClick={() => onOpenModal("signup")}
              className="px-6 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center gap-1 font-medium"
            >
              <span>Sign Up</span>
              <span className="text-lg">➜</span>
            </button>
          </div>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="px-4 py-[3px] border-blue-600 border rounded text-blue-600 text-sm  "
            onClick={() => onOpenModal("login")}
          >
            Login
          </button>
          <div className="text-3xl" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-xl rounded-xl mx-3 mt-2 px-4 py-4 space-y-2 animate-slide">
          <ul className="space-y-1">
            <li
              className="hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded cursor-pointer transition active:scale-95 font-medium text-gray-800"
              onClick={() => {
                const section = document.getElementById('payments-section');
                section?.scrollIntoView({ behavior: 'smooth' });
                setOpen(false); // Closes the menu after scroll
              }}
            >
              Payments
            </li>
            <li
              className="hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded cursor-pointer transition active:scale-95 font-medium text-gray-800"
              onClick={() => {
                const section = document.getElementById('payments-section');
                section?.scrollIntoView({ behavior: 'smooth' });
                setOpen(false); // Closes the menu after scroll
              }}
            >
              Benefits
            </li>
            <li
              className="hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded cursor-pointer transition active:scale-95 font-medium text-gray-800"
              onClick={() => {
                const section = document.getElementById('payments-section');
                section?.scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
            >
              Banking
            </li>
            <li
              className="hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded cursor-pointer transition active:scale-95 font-medium text-gray-800"
              onClick={() => {
                const section = document.getElementById("payments-part");
                section?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              Why Razorpay?
            </li>
          </ul>
          {/* Mobile Sign Up */}
          <button
            onClick={() => {
              setOpen(false);
              onOpenModal("signup");
            }}
            className="w-full px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 active:scale-95 transition"
          >
            Sign Up
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
