import React from 'react';

interface FretboardSvgProps {
  strings: string[];
  frets: number[];
  currentTuning: string;
  activeNote: { string: string; fret: number; note: string } | null;
  isNoteHighlighted: (note: string) => boolean;
  onNoteClick: (string: string, fret: number) => void;
  tunings: any;
}

const FretboardSvg: React.FC<FretboardSvgProps> = ({
  strings,
  frets,
  currentTuning,
  activeNote,
  isNoteHighlighted,
  onNoteClick,
  tunings,
}) => {
  return (
    <svg viewBox="0 0 1080 300" className="w-full h-auto">
      <rect x="40" y="20" width="1000" height="260" fill="#2C3E50" />
      
      {/* Open String Notes */}
      {strings.map((string, stringIndex) => {
        const openNote = string;
        const isHighlighted = isNoteHighlighted(openNote);
        
        return (
          <g key={`open-${stringIndex}`}>
            <rect
              x="0"
              y={stringIndex * 40 + 20}
              width="40"
              height="40"
              fill="transparent"
              onClick={() => onNoteClick(string, 0)}
              className="cursor-pointer hover:fill-white hover:fill-opacity-10"
            />
            {(activeNote?.string === string && activeNote?.fret === 0) || isHighlighted ? (
              <>
                <circle
                  cx="20"
                  cy={stringIndex * 40 + 40}
                  r="15"
                  fill={isHighlighted ? '#E74C3C' : '#3498DB'}
                />
                <text
                  x="20"
                  y={stringIndex * 40 + 45}
                  textAnchor="middle"
                  className="text-sm font-bold"
                  fill="#ECF0F1"
                >
                  {openNote}
                </text>
              </>
            ) : (
              <text
                x="20"
                y={stringIndex * 40 + 45}
                textAnchor="middle"
                className="text-sm font-bold"
                fill="#95A5A6"
              >
                {openNote}
              </text>
            )}
          </g>
        );
      })}

      <line
        x1="40"
        y1="20"
        x2="40"
        y2="280"
        stroke="#ECF0F1"
        strokeWidth="8"
      />

      {strings.map((_, stringIndex) => (
        <line
          key={`string-${stringIndex}`}
          x1="40"
          y1={stringIndex * 40 + 40}
          x2="1040"
          y2={stringIndex * 40 + 40}
          stroke="#ECF0F1"
          strokeWidth="2"
        />
      ))}

      {frets.map((fret) => (
        <line
          key={`fret-${fret}`}
          x1={fret * 80 + 40}
          y1="20"
          x2={fret * 80 + 40}
          y2="280"
          stroke="#95A5A6"
          strokeWidth="4"
        />
      ))}

      {[3, 5, 7, 9].map((fret) => (
        <circle
          key={`marker-${fret}`}
          cx={fret * 80}
          cy="150"
          r="8"
          fill="#ECF0F1"
        />
      ))}
      <circle cx={12 * 80} cy="90" r="8" fill="#ECF0F1" />
      <circle cx={12 * 80} cy="210" r="8" fill="#ECF0F1" />

      {strings.map((string, stringIndex) => (
        <React.Fragment key={`string-${stringIndex}`}>
          {frets.map((fret) => {
            const note = tunings[currentTuning][string][fret - 1];
            const isHighlighted = isNoteHighlighted(note);
            
            return (
              <g key={`note-${stringIndex}-${fret}`}>
                <rect
                  x={fret * 80 - 40}
                  y={stringIndex * 40 + 20}
                  width="80"
                  height="40"
                  fill="transparent"
                  onClick={() => onNoteClick(string, fret)}
                  className="cursor-pointer hover:fill-white hover:fill-opacity-10"
                />
                {(activeNote?.string === string && activeNote?.fret === fret) || isHighlighted ? (
                  <>
                    <circle
                      cx={fret * 80}
                      cy={stringIndex * 40 + 40}
                      r="15"
                      fill={isHighlighted ? '#E74C3C' : '#3498DB'}
                    />
                    <text
                      x={fret * 80}
                      y={stringIndex * 40 + 45}
                      textAnchor="middle"
                      fill="#ECF0F1"
                      className="text-sm font-bold"
                    >
                      {note}
                    </text>
                  </>
                ) : null}
              </g>
            );
          })}
        </React.Fragment>
      ))}
    </svg>
  );
};

export default FretboardSvg;