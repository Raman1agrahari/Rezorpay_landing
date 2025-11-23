import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "💳",
      title: "100+ Payment Methods",
      desc: "Accept payments via UPI, Cards, Wallets, NetBanking & more",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "⚡",
      title: "Easy Integration",
      desc: "Simple APIs & SDKs with comprehensive documentation",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "📊",
      title: "Powerful Dashboard",
      desc: "Track all transactions, refunds & settlements in real-time",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: "🚀",
      title: "99.9% Uptime",
      desc: "Best-in-class performance with enterprise-grade reliability",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="payments-part" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Razorpay
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to power your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
