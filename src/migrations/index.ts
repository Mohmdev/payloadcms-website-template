import * as migration_20240831_092755_initial from './20240831_092755_initial';

export const migrations = [
  {
    up: migration_20240831_092755_initial.up,
    down: migration_20240831_092755_initial.down,
    name: '20240831_092755_initial'
  },
];
