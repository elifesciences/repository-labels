import { Label } from '../interfaces/label';

export const types: Label[] = [
  {
    name: 'bug',
    description: 'Something that is not working or working incorrectly',
    color: 'd73a4a',
    alias: [':label:  bug']
  },
  {
    name: 'critical',
    description: 'A serious issue that is causing downtime or degraded performance',
    color: 'd73a4a',
    alias: []
  },
  {
    name: 'security',
    description: 'A potential security vulnerability',
    color: 'd73a4a',
    alias: []
  },
  {
    name: 'feature',
    description: 'A major feature or improvement',
    color: '3e4b9e',
    alias: ['feature-request']
  },
  {
    name: 'enhancement',
    description: 'A minor improvement or tweak',
    color: '3e4b9e',
    alias: []
  },
  {
    name: 'task',
    description: 'An incremental step towards completing a larger goal',
    color: '3e4b9e',
    alias: []
  },
  {
    name: 'spike',
    description: 'A time-boxed investigation to learn more about a problem or solution',
    color: '3e4b9e',
    alias: []
  },
  {
    name: 'chore',
    description: 'A trivial or repetative task that requires time but little knowledege',
    color: 'BFBFA3',
    alias: []
  },
  {
    name: 'documentation',
    description: 'Improvements or additions to documentation',
    color: 'BFBFA3',
    alias: ['docs']
  },
  {
    name: 'bucket',
    description: 'A blackhole for organising issues around a specific project or goal',
    color: 'BFBFA3',
    alias: ['']
  },
  {
    name: 'debt',
    description: 'Additional work resulting from a less than ideal solution',
    color: '85bb65',
    alias: ['']
  }
];