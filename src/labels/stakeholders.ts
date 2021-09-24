import { Label } from '../interfaces/label';

const color = 'f48f13';

export const stakeholders: Label[] = [
  {
    name: 'technology',
    description: 'Requested or required by the Technology team',
    color,
    alias: ['engineering', 'tech']
  },
  {
    name: 'editorial',
    description: 'Requested or required by the Editorial team',
    color,
    alias: []
  },
  {
    name: 'production',
    description: 'Requested or required by the Production team',
    color,
    alias: []
  },
  {
    name: 'marketing',
    description: 'Requested or required by the Marketing team',
    color,
    alias: []
  },
  {
    name: 'features',
    description: 'Requested or required by the Features team',
    color,
    alias: []
  },
  {
    name: 'finance',
    description: 'Requested or required by the Finance team',
    color,
    alias: []
  },
  {
    name: 'product',
    description: 'Requested or required by the Product team',
    color,
    alias: []
  },
];
