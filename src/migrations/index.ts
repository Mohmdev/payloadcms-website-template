import * as migration_20240831_094937_initial from './20240831_094937_initial';
import * as migration_20241014_085848_update_v3_0_0_beta_113 from './20241014_085848_update_v3_0_0_beta_113';

export const migrations = [
  {
    up: migration_20240831_094937_initial.up,
    down: migration_20240831_094937_initial.down,
    name: '20240831_094937_initial',
  },
  {
    up: migration_20241014_085848_update_v3_0_0_beta_113.up,
    down: migration_20241014_085848_update_v3_0_0_beta_113.down,
    name: '20241014_085848_update_v3_0_0_beta_113'
  },
];
