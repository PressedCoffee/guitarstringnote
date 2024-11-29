import React from 'react';
import { Music, BookOpen, ShoppingBag } from 'lucide-react';
import InteractiveFretboard from './components/InteractiveFretboard';
import ExploreFretboard from './pages/ExploreFretboard';

function App() {
  const [showExplore, setShowExplore] = React.useState(false);

  if (showExplore) {
    return <ExploreFretboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <header className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">GuitarStringNote</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
              <Music className="w-4 h-4" />
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Guides
            </a>
            <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Shop
            </a>
          </div>
          <button className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master Guitar Notes in Minutes
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Discover the Interactive Guitar Fretboard and learn with ease
            </p>
            <p className="text-lg text-blue-400 mb-8">
              Click on any fret to reveal the note and start your journey to fretboard mastery
            </p>
            
            {/* Interactive Fretboard */}
            <div className="bg-gray-800/50 backdrop-blur rounded-lg shadow-xl p-6 mb-8">
              <InteractiveFretboard />
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setShowExplore(true)}
                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Music className="w-5 h-5" />
                Explore the Fretboard
              </button>
              <button className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Learn Beginner Songs
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;