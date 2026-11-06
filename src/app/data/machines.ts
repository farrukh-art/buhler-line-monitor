import type { Machine } from '../models/machine.model';

export const MACHINES: readonly Machine[] = [
  { id: 'scale', name: 'Scale', shortName: 'Scale', icon: 'scale', status: 'running' },
  { id: 'bag-attach', name: 'Bag Attach', shortName: 'Attacher', icon: 'attacher', status: 'alarm' },
  { id: 'packer', name: 'Packer', shortName: 'Packer', icon: 'packer', status: 'running' },
  { id: 'bag-closer', name: 'Bag Closer', shortName: 'Closer', icon: 'closer', status: 'warning' },
];
