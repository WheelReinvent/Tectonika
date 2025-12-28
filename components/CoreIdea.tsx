export default function CoreIdea() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Core Idea
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-3">Foundational</h3>
            <p className="text-gray-400">
              Build on solid ground with infrastructure that stands the test of time
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Dynamic</h3>
            <p className="text-gray-400">
              Adapt and evolve with the changing landscape of technology
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3">Universal</h3>
            <p className="text-gray-400">
              Scale globally with infrastructure that works everywhere
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
