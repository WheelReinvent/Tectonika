export default function CoreIdea() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Core Idea
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Simplicity First</h3>
            <p className="text-gray-300 leading-relaxed">
              We believe that powerful tools don't have to be complicated. Tectonika provides 
              an intuitive interface that makes complex tasks simple.
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Developer-Centric</h3>
            <p className="text-gray-300 leading-relaxed">
              Built by developers, for developers. Every feature is designed with the 
              developer experience in mind, ensuring maximum productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
