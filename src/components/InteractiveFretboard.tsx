import React, { useState } from 'react';
import { tunings, tuningLabels } from '../utils/tunings';
import { chords } from '../utils/chords';
import { scales } from '../utils/scales';
import { getAllNotesInKey } from '../utils/music';
import { playNote } from '../utils/audio';
import FretboardControls from './FretboardControls';
import ActiveNoteDisplay from './ActiveNoteDisplay';
import FretboardModeSelector, { FretboardMode } from './FretboardModeSelector';
import ChordSelector from './ChordSelector';
import ScaleSelector from './ScaleSelector';
import FretboardSvg from './FretboardSvg';

interface NoteInfo {
  string: string;
  fret: number;
  note: string;
}

const InteractiveFretboard: React.FC = () => {
  const [currentTuning, setCurrentTuning] = useState('Standard');
  const [showSharps, setShowSharps] = useState(true);
  const [activeNote, setActiveNote] = useState<NoteInfo | null>(null);
  const [mode, setMode] = useState<FretboardMode>('notes');
  const [selectedRoot, setSelectedRoot] = useState('C');
  const [selectedChord, setSelectedChord] = useState('major');
  const [selectedScale, setSelectedScale] = useState('major');

  const strings = tuningLabels[currentTuning as keyof typeof tuningLabels];
  const frets = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleNoteClick = (string: string, fret: number) => {
    const note = tunings[currentTuning as keyof typeof tunings][string][fret - 1];
    setActiveNote({ string, fret, note });
    
    if (mode === 'notes') {
      playNote(string, fret);
    }
  };

  const isNoteHighlighted = (note: string): boolean => {
    if (mode === 'chords') {
      const chordNotes = getAllNotesInKey(selectedRoot, chords[selectedChord].intervals);
      return chordNotes.includes(note);
    }
    if (mode === 'scales') {
      const scaleNotes = getAllNotesInKey(selectedRoot, scales[selectedScale].intervals);
      return scaleNotes.includes(note);
    }
    return false;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <FretboardModeSelector mode={mode} onModeChange={setMode} />
      
      <FretboardControls
        currentTuning={currentTuning}
        showSharps={showSharps}
        onTuningChange={setCurrentTuning}
        onToggleSharps={() => setShowSharps(!showSharps)}
      />

      {mode === 'chords' && (
        <ChordSelector
          selectedRoot={selectedRoot}
          selectedChord={selectedChord}
          onRootChange={setSelectedRoot}
          onChordChange={setSelectedChord}
        />
      )}

      {mode === 'scales' && (
        <ScaleSelector
          selectedRoot={selectedRoot}
          selectedScale={selectedScale}
          onRootChange={setSelectedRoot}
          onScaleChange={setSelectedScale}
        />
      )}

      {activeNote && (
        <ActiveNoteDisplay
          note={activeNote.note}
          string={activeNote.string}
          fret={activeNote.fret}
          showSharps={showSharps}
        />
      )}

      <div className="relative overflow-x-auto">
        <FretboardSvg
          strings={strings}
          frets={frets}
          currentTuning={currentTuning}
          activeNote={activeNote}
          isNoteHighlighted={isNoteHighlighted}
          onNoteClick={handleNoteClick}
          tunings={tunings}
        />
      </div>
    </div>
  );
};

export default InteractiveFretboard;