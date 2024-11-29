import React from 'react';
import { scales } from '../utils/scales';

interface ScaleSelectorProps {
  selectedRoot: string;
  selectedScale: string;
  onRootChange: (root: string) => void;
  onScaleChange: (scale: string) => void;
}

const ScaleSelector: React.FC<ScaleSelectorProps> = ({
  selectedRoot,
  selectedScale,
  onRootChange,
  onScaleChange,
}) => {
  const roots = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  return (
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
        value={selectedScale}
        onChange={(e) => onScaleChange(e.target.value)}
        className="px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
      >
        {Object.entries(scales).map(([id, scale]) => (
          <option key={id} value={id}>
            {scale.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ScaleSelector;