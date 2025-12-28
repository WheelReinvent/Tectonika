export default function CoreIdea() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Core Concepts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🌋</div>
            <h3 className="text-xl font-semibold mb-3">Inner Tectonics</h3>
            <p className="text-gray-400">
              Your inner world modeled as interacting layers: emotional, cognitive, physiological, 
              and environmental states that shift and interact over time
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📡</div>
            <h3 className="text-xl font-semibold mb-3">Silent Signals</h3>
            <p className="text-gray-400">
              Low-level details — subtle changes in routine, bodily shifts, micro-behaviors — 
              that usually go unnoticed but carry predictive information
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold mb-3">State Graph</h3>
            <p className="text-gray-400">
              Instead of a flat timeline, a graph of your recurring states and transitions — 
              revealing what typically precedes each state and what follows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
