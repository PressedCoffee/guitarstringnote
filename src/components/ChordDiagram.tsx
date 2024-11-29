import React from 'react';

interface ChordDiagramProps {
  positions: number[];
  name: string;
}

const ChordDiagram: React.FC<ChordDiagramProps> = ({ positions, name }) => {
  const strings = 6;
  const frets = 4;

  return (
    <div className="inline-block bg-gray-800 rounded-lg p-3">
      <div className="text-center mb-2 text-sm font-medium text-blue-400">{name}</div>
      <svg width="80" height="100" viewBox="0 0 80 100" className="mx-auto">
        {/* Background */}
        <rect x="0" y="0" width="80" height="100" fill="#1a1a1a" rx="4" />
        
        {/* Nut */}
        <line x1="10" y1="20" x2="70" y2="20" stroke="#e2e8f0" strokeWidth="4" />
        
        {/* Frets */}
        {Array.from({ length: frets }).map((_, i) => (
          <line
            key={`fret-${i}`}
            x1="10"
            y1={40 + i * 20}
            x2="70"
            y2={40 + i * 20}
            stroke="#4a5568"
            strokeWidth="1"
          />
        ))}
        
        {/* Strings */}
        {Array.from({ length: strings }).map((_, i) => (
          <line
            key={`string-${i}`}
            x1={10 + i * 12}
            y1="20"
            x2={10 + i * 12}
            y2="100"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}
        
        {/* Finger positions */}
        {positions.map((pos, i) => {
          if (pos === -1) return null; // Skip muted strings
          if (pos === 0) { // Open string
            return (
              <text
                key={`pos-${i}`}
                x={10 + i * 12}
                y="15"
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="12"
              >
                ○
              </text>
            );
          }
          return (
            <circle
              key={`pos-${i}`}
              cx={10 + i * 12}
              cy={30 + (pos - 1) * 20}
              r="6"
              fill="#3182ce"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default ChordDiagram;