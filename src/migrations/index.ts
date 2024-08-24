import * as migration_20240822_143154_initial from './20240822_143154_initial'

export const migrations = [
  {
    up: migration_20240822_143154_initial.up,
    down: migration_20240822_143154_initial.down,
    name: '20240822_143154_initial',
  },
]
