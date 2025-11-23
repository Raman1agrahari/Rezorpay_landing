import React from "react";

const currencyColors = [
  "bg-green-100",
  "bg-blue-100",
  "bg-blue-100",
  "bg-blue-100",
  "bg-green-200",
  "bg-blue-100",
];

const HeroStrip = ({ onOpenModal }) => {
  return (
    <div
      className="w-full mt-19 bg-[#e7f0fa] py-4 border-b border-blue-100"
      style={{
        backgroundImage:
          'url("https://razorpay.com/build/browser/static/world-map.5b7efb0a.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      {/* DESKTOP LAYOUT */}
      <div
        className="
          max-w-7xl mx-auto px-5 pr-[30px]
          hidden md:flex items-center gap-2 justify-between flex-wrap
        "
      >
        {/* LEFT — Accept + International Payments */}
        <div className="flex items-center gap-2 text-sm ml-20 shrink-0 mr-5">
          <span className="font-medium text-gray-700">Accept</span>
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            International Payments
          </span>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3 flex-1 ml-3 justify-end min-w-[220px] flex-wrap">

          <span className="text-gray-700 text-sm whitespace-nowrap">
            Global cards, Apple Pay, bank transfers. Low fees, local support.
          </span>

          <button
            onClick={() => onOpenModal("signup")}
            className="
              px-4 py-6px bg-[#f5f9ff]
              rounded-md text-blue-700 font-semibold
              hover:bg-blue-100 shadow-sm text-xs transition
            "
          >
            Sign Up Now
          </button>

          {/* Currencies */}
          <div className="flex items-center ml-5 mr-20 gap-2 shrink-0">
            {["£", "€", "$", "¥", "A$", "₹"].map((c, i) => (
              <span
                key={i}
                className={`${currencyColors[i]} w-7 h-7 flex items-center justify-center rounded-full text-gray-800 text-xs font-bold shadow-sm`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

  {/* MOBILE LAYOUT (Mimicking Screenshot structure) */}
<div className="md:hidden w-full flex bg-[#f4f7f9]">
  
  {/* LEFT SECTION: 'Accept International Payments' with Light Blue Background */}
  <div className="flex flex-col justify-center leading-snug px-4 py-3 bg-[#e7f0fa]">
    <span className="text-blue-600 text-sm font-normal">Accept</span>
    <span className="text-blue-600 text-sm font-normal -mt-1">
      International Payments
    </span>
  </div>

  {/* RIGHT SECTION: Description and Sign Up Link */}
  <div className="flex items-center bg-[#e7f0fa] justify-between grow px-4 py-3">
    
    {/* Description Text */}
    <p className="text-gray-700 text-xs leading-snug">
      Global cards, Apple Pay, bank transfers. Low fees, local support.
    </p>

    {/* Sign Up Link (Looks like a link) */}
    <a 
      href="#" 
      className="text-blue-700 text-sm font-semibold whitespace-nowrap ml-4 hover:text-blue-800 transition"
      onClick={() => onOpenModal("signup")} 
    >
      Sign Up Now
    </a>

  </div>

</div>
    </div>
  );
};

export default HeroStrip;
