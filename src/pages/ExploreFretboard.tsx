import React from 'react';
import { ArrowLeft, BookOpen, Music, Grid2X2, Info } from 'lucide-react';
import InteractiveFretboard from '../components/InteractiveFretboard';

const ExploreFretboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Explore the Fretboard: Your Complete Guitar Toolkit
          </h1>
          <p className="text-xl text-gray-300">
            Unlock the full potential of your guitar fretboard with interactive tools for notes, chords, and scales.
          </p>
        </div>

        {/* Interactive Tools Section */}
        <div className="bg-gray-800/50 backdrop-blur rounded-lg shadow-xl p-6 mb-8">
          <InteractiveFretboard />
        </div>

        {/* Learning Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Notes Guide */}
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold">Understanding Notes</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Learn how notes are arranged on the fretboard and how to find them quickly.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                Each fret represents a half-step
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                Notes repeat every 12 frets
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                Use markers as reference points
              </li>
            </ul>
          </div>

          {/* Chords Guide */}
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Grid2X2 className="w-6 h-6 text-red-400" />
              <h2 className="text-xl font-bold">Chord Basics</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Discover how chords are built and learn common chord shapes.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-red-400" />
                Major chords use 1-3-5 intervals
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-red-400" />
                Minor chords flatten the 3rd
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-red-400" />
                7th chords add the 7th interval
              </li>
            </ul>
          </div>

          {/* Scales Guide */}
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-bold">Scale Patterns</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Learn essential scale patterns and how to use them in your playing.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-green-400" />
                Major scale: W-W-H-W-W-W-H
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-green-400" />
                Minor pentatonic: Most common in rock
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-green-400" />
                Blues scale adds the blue note
              </li>
            </ul>
          </div>
        </div>

        {/* Practice Tips */}
        <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Practice Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Daily Exercises</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Practice finding notes without looking</li>
                <li>• Play scales in different positions</li>
                <li>• Learn one new chord voicing daily</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Learning Path</h3>
              <ul className="space-y-2 text-gray-300">
                <li>1. Master the basic open chords</li>
                <li>2. Learn the minor pentatonic scale</li>
                <li>3. Explore barre chords and power chords</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExploreFretboard;