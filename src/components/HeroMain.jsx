import React from "react";

const HeroMain = ({ onOpenModal }) => {
  return (
    <section className="pt-10 pb-5 bg-linear-to-br from-[#e9f1fe] via-[#f7faff] to-[#dde7f9] min-h-[630px] flex items-center">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT SECTION */}
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Automated{" "}
            <span className="px-3 py-1 rounded-lg bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 text-white shadow-lg">
              Payroll
            </span>
            <br />
            for India’s boldest <br /> disruptors
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8">
            Automated Payroll &amp; Compliances | Built for Startups &amp; Enterprises
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => onOpenModal("signup")}
              className="px-8 py-5 bg-blue-700 text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 hover:bg-blue-600 active:scale-95 transition"
            >
              Sign Up Now →
            </button>
            <button
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg font-semibold bg-white shadow-sm hover:bg-blue-50 hover:border-blue-700 active:scale-95 transition"
              onClick={() => {
                const section = document.getElementById('payments-part');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Know More
            </button>
          </div>
        </div>
        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center lg:justify-end mt-6 sm:mt-10">
          <div className="w-72 sm:w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 hover:shadow-blue-100 transition">
            <div className="absolute inset-0 rounded-2xl pointer-events-none z-2 bg-linear-to-br from-transparent via-white/40 to-blue-50/30" />
            <img
              src="https://framerusercontent.com/images/kkOygtHRHYPv76o5PniXD7eNI.png?scale-down-to=1024&width=1200&height=1650"
              alt="Founder"
              className="relative z-10 w-full h-[380px] sm:h-[450px] object-cover rounded-xl shadow-lg"
            />
            {/* Decorative bar below image */}
            <div className="h-3 w-full bg-linear-to-r from-blue-400 via-blue-200 to-white rounded-b-xl mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
