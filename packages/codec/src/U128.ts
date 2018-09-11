// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { U128, U128Decoder } from './types';

import BN from 'bn.js';

import BaseNumber from './base/Number';

const BITLENGTH = 128;

class U128Impl extends BaseNumber implements U128 {
  constructor (value: BN | number) {
    super(value, BITLENGTH);
  }

  static fromJSON (input: any): U128Impl {
    return new U128Impl(
      BaseNumber.valueFromJSON(input, BITLENGTH)
    );
  }

  static fromU8a (input: Uint8Array): U128Impl {
    return new U128Impl(
      BaseNumber.valueFromU8a(input, BITLENGTH)
    );
  }
}

export default (U128Impl as U128Decoder);
