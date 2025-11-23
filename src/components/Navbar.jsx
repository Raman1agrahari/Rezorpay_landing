import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdHeadsetMic } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

// Parent se onOpenModal aata hai (login ya signup decide)
const Navbar = ({ onOpenModal }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-50 shadow-sm fixed top-0 py-1.5 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg" alt="logo" className="h-7" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center flex-1 justify-between ml-10">
          <ul className="flex items-center gap-6 text-gray-800 font-semibold text-[15px]">
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => {
                const section = document.getElementById('payments-section');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Payments
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Banking+</li>
            <li className="hover:text-blue-600 cursor-pointer">Payroll</li>
            <li className="hover:text-blue-600 cursor-pointer">Engage</li>
            <li className="hover:text-blue-600 cursor-pointer">Partners</li>
            <li className="hover:text-blue-600 cursor-pointer">Resources</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          </ul>

          {/* Icons & Buttons */}
          <div className="flex items-center gap-5 ml-8">
            <MdHeadsetMic className="text-2xl text-gray-600 cursor-pointer" />

            <div className="flex items-center gap-1 cursor-pointer">
              <img src="https://flagcdn.com/w20/in.png" className="w-5 h-4" alt="flag" />
              <IoIosArrowDown className="text-gray-600 text-sm" />
            </div>

            {/* ---- Attach onOpenModal to Login Button ---- */}
            <button
              className="px-6 py-1 border-blue-600 border rounded-md hover:bg-blue-50 text-blue-600 font-medium transition"
              onClick={() => onOpenModal("login")}
            >
              Login
            </button>

            {/* Desktop Sign Up */}
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
          {/* Login for mobile */}
          <button
            className="px-4 py-[3px] border-blue-600 border rounded text-blue-600 text-sm"
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
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2 animate-slide">
          <p className="cursor-pointer">Payments</p>
          <p className="cursor-pointer">Banking+</p>
          <p className="cursor-pointer">Payroll</p>
          <p className="cursor-pointer">Engage</p>
          <p className="cursor-pointer">Partners</p>
          <p className="cursor-pointer">Resources</p>
          <p className="cursor-pointer">Pricing</p>

          {/* Mobile Sign Up */}
          <button
            onClick={() => {
              setOpen(false);
              onOpenModal("signup");
            }}
            className="w-full px-5 py-2 border-blue-600 border rounded-md text-blue-600 font-medium"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
