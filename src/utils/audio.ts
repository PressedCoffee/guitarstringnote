import { getNoteFromInterval } from './music';

const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

// Base frequencies for open strings in standard tuning
const baseFrequencies = {
  'E': 82.41,  // Low E (6th string)
  'A': 110.00, // A (5th string)
  'D': 146.83, // D (4th string)
  'G': 196.00, // G (3rd string)
  'B': 246.94, // B (2nd string)
  'e': 329.63  // High E (1st string)
};

export async function playNote(string: string, fret: number) {
  // For open strings (fret 0), use the base frequency
  const baseFreq = baseFrequencies[string];
  if (!baseFreq) return;
  
  const frequency = baseFreq * Math.pow(2, fret / 12);
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Use 'triangle' waveform for a more guitar-like sound
  oscillator.type = 'triangle';
  oscillator.frequency.value = frequency;
  
  const now = audioContext.currentTime;
  
  // Improved envelope for more natural sound
  gainNode.gain.setValueAtTime(0.0, now);
  gainNode.gain.linearRampToValueAtTime(0.3, now + 0.02); // Quick attack
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.5); // Longer decay
  
  oscillator.start(now);
  oscillator.stop(now + 1.5);
}