import React from "react";

const HeroStrip = () => {
  return (
    <div
      className="
      w-full 
      mt-15
      bg-[#e3edf7] 
      py-3 
      border-b border-blue-100
      "
      style={{
        backgroundImage:
          'url("https://razorpay.com/build/browser/static/world-map.5b7efb0a.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <div
        className="
        max-w-7xl mx-auto
        px-4
        flex items-center justify-between
        text-xs sm:text-sm
        gap-1
        "
      >
        {/* LEFT TEXT */}
        <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
          <span className="font-medium text-gray-700">Accept</span>

          <span className="text-blue-600 font-semibold cursor-pointer">
            International Payments
          </span>
        </div>

        {/* CENTER DESCRIPTION */}
        <p className="
            text-gray-600 
            hidden md:block 
            whitespace-nowrap
        ">
          Global cards, Apple Pay, bank transfers. Low fees, local support.
        </p>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-3">

          {/* SIGN UP */}
          <button className="
              px-3 py-1 
              bg-white 
              border rounded 
              text-blue-600 
              font-medium 
              hover:bg-blue-50
              shadow-sm 
              text-xs
            ">
            Sign Up Now
          </button>

          {/* CURRENCIES */}
          <div className="flex items-center gap-1">
            {["£", "€", "$", "¥", "A$", "₹"].map((c, i) => (
              <span
                key={i}
                className="
                  bg-[#d4e5f7] 
                  px-2 py-[3px] 
                  rounded-full 
                  text-gray-800 
                  text-xs font-bold
                "
              >
                {c}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroStrip;
