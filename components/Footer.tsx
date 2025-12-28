export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tectonika</h3>
            <p className="text-gray-400">
              Understanding your inner tectonics – the deep processes that shape your life
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#signup" className="hover:text-white transition-colors">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://twitter.com" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="mailto:hello@tectonika.dev" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Tectonika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
