import React from 'react';
import { Music, HelpCircle } from 'lucide-react';
import { tunings } from '../utils/tunings';

interface FretboardControlsProps {
  currentTuning: string;
  showSharps: boolean;
  onTuningChange: (tuning: string) => void;
  onToggleSharps: () => void;
}

const FretboardControls: React.FC<FretboardControlsProps> = ({
  currentTuning,
  showSharps,
  onTuningChange,
  onToggleSharps,
}) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSharps}
          className="group relative px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg flex items-center gap-2"
          aria-label={`Toggle to ${showSharps ? 'flats' : 'sharps'}`}
        >
          <Music className="w-4 h-4" />
          {showSharps ? '♯ to ♭' : '♭ to ♯'}
        </button>
        <div className="relative">
          <select
            value={currentTuning}
            onChange={(e) => onTuningChange(e.target.value)}
            className="pl-4 pr-8 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            {Object.keys(tunings).map(tuning => (
              <option key={tuning} value={tuning}>{tuning}</option>
            ))}
          </select>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <button
        className="group relative flex items-center text-gray-400 hover:text-white"
        aria-label="How to use the fretboard"
      >
        <HelpCircle className="w-5 h-5" />
        <div className="absolute bottom-full mb-2 hidden group-hover:block w-64 p-2 bg-gray-800 rounded-lg shadow-lg text-sm text-white">
          Click on any fret to see the note. Use the controls to change tuning or toggle between sharps and flats.
        </div>
      </button>
    </div>
  );
};

export default FretboardControls;