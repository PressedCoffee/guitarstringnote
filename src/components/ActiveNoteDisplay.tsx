import React from 'react';
import { Info } from 'lucide-react';
import { sharpToFlat } from '../utils/tunings';

interface ActiveNoteDisplayProps {
  note: string;
  string: string;
  fret: number;
  showSharps: boolean;
}

const ActiveNoteDisplay: React.FC<ActiveNoteDisplayProps> = ({
  note,
  string,
  fret,
  showSharps,
}) => {
  const displayNote = showSharps ? note : (sharpToFlat[note] || note);

  return (
    <div className="mb-4 p-4 bg-gray-700/50 backdrop-blur rounded-lg shadow-lg text-white">
      <div className="flex items-center gap-2">
        <Info className="w-5 h-5 text-blue-400" />
        <span>
          Note: <strong>{displayNote}</strong> | 
          String: <strong>{string}</strong> | 
          Fret: <strong>{fret}</strong>
        </span>
      </div>
    </div>
  );
};

export default ActiveNoteDisplay;