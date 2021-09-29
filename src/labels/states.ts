import { Label } from '../interfaces/label';

export const states: Label[] = [
  {
    name: 'blocked',
    description: 'Progress on this issue currently impeeded',
    color: '000000',
    alias: ['blocked']
  },
  {
    name: 'upstream',
    description: 'Progress on this issue currently impeeded due to an upstream dependency',
    color: '000000',
    alias: []
  },
  {
    name: 'discussion',
    description: 'Currently under debate in order to reach a decision or to exchange ideas',
    color: 'd876e3',
    alias: []
  },
  {
    name: 'refinement',
    description: 'Requires further definition before being ready to work',
    color: 'd876e3',
    alias: []
  },
  {
    name: 'question',
    description: 'Further information is requested or required',
    color: 'd876e3',
    alias: []
  },
  {
    name: 'discovery',
    description: 'Requires further investigation before being ready to work',
    color: 'fbca04',
    alias: []
  },
  {
    name: 'ready to work',
    description: 'Issue is well defined, fully scoped and is ready to be worked on',
    color: '0e8a16',
    alias: []
  },
  {
    name: 'unplanned',
    description: 'Not originally planned for the current sprint, but needs to be addressed',
    color: 'fbca04',
    alias: []
  },
  {
    name: 'backlog',
    description: 'Work pulled into the current sprint from the backlog',
    color: '1d76db',
    alias: []
  }
];
