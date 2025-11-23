import React from "react";

const HeroBottom = () => {
  return (
    <div className="mt-0 pb-10  ">
      <div className="w-full mx-auto bg-white shadow-lg rounded-xl p-4">
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
      <div className="mt-10 opacity-70 flex justify-center flex-wrap gap-10 text-gray-700 text-xl font-medium">
        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/google-logo.png" className="w-6 h-6" />
          <span>Google</span>
        </div>

        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/amazon.png" className="w-6 h-6" />
          <span>Amazon</span>
        </div>


        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/airport.png" className="w-6 h-6" />
          <span>Goibibo</span>
        </div>

        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/dumbbell.png" className="w-6 h-6" />
          <span>Cure.fit</span>
        </div>

        <div className="flex items-center gap-2">
         <img src="https://img.icons8.com/color/48/paytm.png" className="w-6 h-6" />
          <span>Paytm</span>
        </div>

        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/tax.png" className="w-6 h-6" />
          <span>Cleartax</span>
        </div>

        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/movie-projector.png" className="w-6 h-6" />
          <span>BookMyShow</span>
        </div>

        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/cleaning-a-surface.png" className="w-6 h-6" />
          <span>Urban Company</span>
        </div>

        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/microsoft.png" className="w-6 h-6" />
          <span>Microsoft</span>
        </div>
      </div>


    </div>
  );
};

export default HeroBottom;
