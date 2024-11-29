export interface ScaleDefinition {
  name: string;
  intervals: number[];
  category: string;
}

export const scales: { [key: string]: ScaleDefinition } = {
  'major': {
    name: 'Major Scale',
    intervals: [0, 2, 4, 5, 7, 9, 11],
    category: 'basic'
  },
  'minor': {
    name: 'Natural Minor',
    intervals: [0, 2, 3, 5, 7, 8, 10],
    category: 'basic'
  },
  'pentatonic_major': {
    name: 'Major Pentatonic',
    intervals: [0, 2, 4, 7, 9],
    category: 'pentatonic'
  },
  'pentatonic_minor': {
    name: 'Minor Pentatonic',
    intervals: [0, 3, 5, 7, 10],
    category: 'pentatonic'
  },
  'blues': {
    name: 'Blues Scale',
    intervals: [0, 3, 5, 6, 7, 10],
    category: 'blues'
  }
};