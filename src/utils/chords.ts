export interface ChordDefinition {
  name: string;
  intervals: number[];
  symbol: string;
  category: string;
}

export const chords: { [key: string]: ChordDefinition } = {
  'major': {
    name: 'Major',
    intervals: [0, 4, 7],
    symbol: '',
    category: 'basic'
  },
  'minor': {
    name: 'Minor',
    intervals: [0, 3, 7],
    symbol: 'm',
    category: 'basic'
  },
  'dominant7': {
    name: 'Dominant 7th',
    intervals: [0, 4, 7, 10],
    symbol: '7',
    category: 'seventh'
  },
  'major7': {
    name: 'Major 7th',
    intervals: [0, 4, 7, 11],
    symbol: 'maj7',
    category: 'seventh'
  },
  'minor7': {
    name: 'Minor 7th',
    intervals: [0, 3, 7, 10],
    symbol: 'm7',
    category: 'seventh'
  }
};