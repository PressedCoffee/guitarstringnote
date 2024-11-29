const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export function getNoteFromInterval(root: string, interval: number): string {
  const rootIndex = notes.indexOf(root);
  if (rootIndex === -1) return root;
  return notes[(rootIndex + interval) % 12];
}

export function getAllNotesInKey(root: string, intervals: number[]): string[] {
  return intervals.map(interval => getNoteFromInterval(root, interval));
}