import * as migration_20240831_094937_initial from './20240831_094937_initial';
import * as migration_20240902_173254_search from './20240902_173254_search';

export const migrations = [
  {
    up: migration_20240831_094937_initial.up,
    down: migration_20240831_094937_initial.down,
    name: '20240831_094937_initial',
  },
  {
    up: migration_20240902_173254_search.up,
    down: migration_20240902_173254_search.down,
    name: '20240902_173254_search'
  },
];
