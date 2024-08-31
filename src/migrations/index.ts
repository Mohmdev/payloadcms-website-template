import * as migration_20240831_080805_initial from './20240831_080805_initial';

export const migrations = [
  {
    up: migration_20240831_080805_initial.up,
    down: migration_20240831_080805_initial.down,
    name: '20240831_080805_initial'
  },
];
