import React from 'react';

const Products = ({ onOpenModal }) => {
  const products = [
    {
      name: "Payment Gateway",
      desc: "Accept payments from customers instantly with 100+ payment methods",
      icon: "💰",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      name: "Payment Links",
      desc: "Share payment links via SMS, Email, WhatsApp without any coding",
      icon: "🔗",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      name: "POS Solution",
      desc: "Accept in-store payments with India's most advanced POS device",
      icon: "📱",
      color: "bg-pink-50 hover:bg-pink-100"
    },
    {
      name: "Payroll & HR",
      desc: "Automate salary disbursements and manage employee compliance",
      icon: "👥",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      name: "Current Account",
      desc: "Business banking with powerful automation and smart dashboard",
      icon: "🏦",
      color: "bg-orange-50 hover:bg-orange-100"
    },
    {
      name: "International Payments",
      desc: "Accept payments from 150+ countries in 100+ currencies",
      icon: "🌍",
      color: "bg-indigo-50 hover:bg-indigo-100"
    }
  ];

  return (
    <section id="payments-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Payment & Banking Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Everything your business needs to accept payments and manage finances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.color} p-8 rounded-2xl transition duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer`}
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-700 mb-6">{product.desc}</p>
              <button
                onClick={onOpenModal}
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
