import React from 'react';
import { Music, Grid2X2, Hash } from 'lucide-react';

export type FretboardMode = 'notes' | 'chords' | 'scales';

interface FretboardModeSelectorProps {
  mode: FretboardMode;
  onModeChange: (mode: FretboardMode) => void;
}

const FretboardModeSelector: React.FC<FretboardModeSelectorProps> = ({
  mode,
  onModeChange,
}) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        onClick={() => onModeChange('notes')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          mode === 'notes'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        <Hash className="w-4 h-4" />
        Notes
      </button>
      <button
        onClick={() => onModeChange('chords')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          mode === 'chords'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        <Music className="w-4 h-4" />
        Chords
      </button>
      <button
        onClick={() => onModeChange('scales')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          mode === 'scales'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        <Grid2X2 className="w-4 h-4" />
        Scales
      </button>
    </div>
  );
};

export default FretboardModeSelector;