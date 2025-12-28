export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized performance that keeps your applications running at peak speed",
      icon: "⚡"
    },
    {
      title: "Rock Solid",
      description: "Built on proven technologies with enterprise-grade reliability",
      icon: "🛡️"
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows effortlessly",
      icon: "🔗"
    },
    {
      title: "Developer First",
      description: "Intuitive APIs and comprehensive documentation for rapid development",
      icon: "👨‍💻"
    },
    {
      title: "Auto Scaling",
      description: "Automatically adjusts to handle traffic spikes and optimize costs",
      icon: "📈"
    },
    {
      title: "Global CDN",
      description: "Deploy globally with edge locations around the world",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
