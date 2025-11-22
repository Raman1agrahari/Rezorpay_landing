import React from "react";

const HeroBottom = () => {
  return (
    <div className="mt-5 pb-10 ">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4">

        {/* PRODUCT SELECTOR */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">
            🔍 Need help choosing?
          </button>

          <button className="px-4 py-2 bg-blue-50 rounded-lg">💳 Accept Payments</button>
          <button className="px-4 py-2 bg-blue-50 rounded-lg">💰 Make Payouts</button>
          <button className="px-4 py-2 bg-blue-50 rounded-lg">🏦 Start Business Banking</button>
          <button className="px-4 py-2 bg-blue-50 rounded-lg">💵 Get Credit</button>
          <button className="px-4 py-2 bg-blue-50 rounded-lg">👥 Automate Payroll</button>
          

        </div>
      </div>

      {/* LOGOS */}
     <div className="mt-10 opacity-70 flex justify-center flex-wrap gap-10 text-gray-700 text-lg">
      <span>Swiggy</span>
      <span>Nykaa</span>
      <span>Zerodha</span>
      <span>Goibibo</span>
      <span>Cure.fit</span>
      <span>Cleartax</span>
      <span>BookMyShow</span>
      <span>Urban Company</span>
      <span>Zomato</span>
    </div>
    </div>
  );
};

export default HeroBottom;
