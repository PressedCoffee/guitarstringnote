import React from 'react';
import { chords } from '../utils/chords';
import ChordDiagram from './ChordDiagram';

interface ChordSelectorProps {
  selectedRoot: string;
  selectedChord: string;
  onRootChange: (root: string) => void;
  onChordChange: (chord: string) => void;
}

const ChordSelector: React.FC<ChordSelectorProps> = ({
  selectedRoot,
  selectedChord,
  onRootChange,
  onChordChange,
}) => {
  const roots = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  return (
    <div className="mb-4">
      <div className="flex items-center gap-4 mb-4">
        <select
          value={selectedRoot}
          onChange={(e) => onRootChange(e.target.value)}
          className="px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
        >
          {roots.map(root => (
            <option key={root} value={root}>{root}</option>
          ))}
        </select>
        <select
          value={selectedChord}
          onChange={(e) => onChordChange(e.target.value)}
          className="px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
        >
          {Object.entries(chords).map(([id, chord]) => (
            <option key={id} value={id}>
              {chord.name} ({selectedRoot}{chord.symbol})
            </option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ChordDiagram
          positions={[0, 3, 2, 0, 1, 0]}
          name={`${selectedRoot} Major`}
        />
        <ChordDiagram
          positions={[0, 3, 2, 0, 0, 0]}
          name={`${selectedRoot} Minor`}
        />
        <ChordDiagram
          positions={[0, 3, 2, 0, 1, 3]}
          name={`${selectedRoot}7`}
        />
        <ChordDiagram
          positions={[0, 3, 2, 0, 0, 3]}
          name={`${selectedRoot}m7`}
        />
      </div>
    </div>
  );
};

export default ChordSelector;