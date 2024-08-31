import * as migration_20240831_094937_initial from './20240831_094937_initial';

export const migrations = [
  {
    up: migration_20240831_094937_initial.up,
    down: migration_20240831_094937_initial.down,
    name: '20240831_094937_initial'
  },
];
