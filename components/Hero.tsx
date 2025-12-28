export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Tectonika
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Building the foundation for modern development
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#signup"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
          <a
            href="#what-is"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
