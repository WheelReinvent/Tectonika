export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance, ensuring your applications run smoothly.",
      icon: "⚡",
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your needs, from prototype to production at scale.",
      icon: "📈",
    },
    {
      title: "Developer Tools",
      description: "Comprehensive tooling and debugging capabilities for efficient development.",
      icon: "🛠️",
    },
    {
      title: "Secure by Default",
      description: "Industry-standard security practices built into every layer of the platform.",
      icon: "🔒",
    },
    {
      title: "Real-time Updates",
      description: "Live synchronization and instant feedback for seamless collaboration.",
      icon: "🔄",
    },
    {
      title: "Open Source",
      description: "Transparent, community-driven development with full visibility into the codebase.",
      icon: "🌐",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
