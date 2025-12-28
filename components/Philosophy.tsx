export default function Philosophy() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Philosophy
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Quality Over Quantity
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We prioritize creating robust, well-tested features over rapid feature expansion. 
              Every component is carefully crafted to deliver reliable performance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Community-Driven Innovation
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our roadmap is shaped by the needs of our community. We listen, adapt, and 
              evolve based on real-world feedback from developers like you.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Sustainable Development
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're committed to building software that stands the test of time, with 
              maintainable code and clear documentation that enables long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
