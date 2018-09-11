// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { U64, U64Decoder } from './types';

import BN from 'bn.js';

import BaseNumber from './base/Number';

const BITLENGTH = 64;

class U64Impl extends BaseNumber implements U64 {
  constructor (value: BN | number) {
    super(value, BITLENGTH);
  }

  static fromJSON (input: any): U64Impl {
    return new U64Impl(
      BaseNumber.valueFromJSON(input, BITLENGTH)
    );
  }

  static fromU8a (input: Uint8Array): U64Impl {
    return new U64Impl(
      BaseNumber.valueFromU8a(input, BITLENGTH)
    );
  }
}

export default (U64Impl as U64Decoder);
