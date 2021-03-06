// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { StorageFunction } from '@polkadot/types/StorageKey';

import BN from 'bn.js';
import * as substrate from './substrate';

type Substrate = keyof typeof substrate;

export interface ModuleStorage {
  [key: string]: StorageFunction;
}

export interface Storage {
  [key: string]: ModuleStorage; // Will hold modules returned by state_getMetadata
  substrate: { [key in Substrate]: StorageFunction };
}
