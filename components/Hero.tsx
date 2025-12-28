export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Tectonika
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Building the foundation for tomorrow&apos;s digital infrastructure
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#signup"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Get Early Access
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-gray-700 font-semibold rounded-lg hover:border-gray-500 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
