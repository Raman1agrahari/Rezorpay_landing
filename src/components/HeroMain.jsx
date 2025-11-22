import React from "react";

const HeroMain = ({ onOpenModal }) => {
  return (
    <section className="pt-28 pb-10 bg-linear-to-br from-[#f3f7ff] via-white to-[#eef3ff]">
      <div
        className="
        max-w-7xl mx-auto 
        px-6 lg:px-12 xl:px-20 
        grid lg:grid-cols-2 gap-20 
        items-center
      "
      >
        {/* LEFT TEXT SECTION */}
        <div className="text-center lg:text-left">
          <h1
            className="
            text-4xl sm:text-5xl lg:text-6xl 
            font-bold text-gray-900 
            leading-tight mb-6
          "
          >
            Automated <span className="text-blue-600">Payroll</span> <br />
            for India's boldest <br />
            disruptors
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl mb-10">
            Automated Payroll & Compliances | Built for Startups & Enterprises
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => onOpenModal("signup")}
              className="
              px-8 py-3 
              bg-blue-600 text-white 
              rounded-lg text-lg font-semibold 
              hover:bg-blue-700 shadow-md transition
            "
            >
              Sign Up Now →
            </button>

            <button
              className="
              px-8 py-3 
              border border-blue-600 
              text-blue-600 
              rounded-lg text-lg font-semibold 
              hover:bg-blue-50 transition
            "
            >
              Know More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center lg:justify-end mt-6 sm:mt-10">
          <div
            className="
            w-72 sm:w-80 md:w-96 
            bg-white rounded-2xl shadow-xl 
            border border-gray-100 p-4
          "
          >
            <img
              src="https://framerusercontent.com/images/kkOygtHRHYPv76o5PniXD7eNI.png?scale-down-to=1024&width=1200&height=1650"
              alt="Founder"
              className="
                w-full h-[380px] sm:h-[450px] 
                object-cover rounded-xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
