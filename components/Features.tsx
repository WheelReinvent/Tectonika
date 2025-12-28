export default function Features() {
  const features = [
    {
      title: "State Check-ins",
      description: "Quick, low-friction prompts to log how you feel, think and sense your body — enriched by sensor data and context",
      icon: "✓"
    },
    {
      title: "Sense Notebook",
      description: "A notebook where each note is tagged by state, feeling, energy, and environment — for capturing 'this feels important but I don't yet know why' thoughts",
      icon: "📓"
    },
    {
      title: "Tectonic Timeline",
      description: "A long-view timeline that emphasizes shifts and phase changes, showing periods of stability, tension build-up, and inner earthquakes",
      icon: "📊"
    },
    {
      title: "State Graph",
      description: "A visual map of your recurring states and typical transitions between them — see patterns like late-night stress leading to poor sleep",
      icon: "🗺️"
    },
    {
      title: "Context & Environment Layer",
      description: "Tracks external cues (time, light, movement, noise, social context) and connects them with your internal states",
      icon: "🌤️"
    },
    {
      title: "Signals & Warnings",
      description: "Detects early combinations of signals that usually precede a crash, shutdown, or spiral — helping you see patterns before they unfold",
      icon: "⚠️"
    },
    {
      title: "Conditions for Deep Work",
      description: "Analyzes when you tend to do your best thinking and feel most alive — surfacing the conditions that produce your good stuff",
      icon: "💡"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Key Features
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
