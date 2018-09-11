// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import BaseNumber from './base/Number';

const BITLENGTH = 128;

export default class U128 extends BaseNumber {
  constructor (value?: BN | number) {
    super(value, BITLENGTH);
  }
}
