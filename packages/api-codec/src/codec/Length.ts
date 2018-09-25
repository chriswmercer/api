// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToBn from '@polkadot/util/u8a/toBn';

import CodecBase from './Base';

const MAX_U8 = new BN(2).pow(new BN(8 - 2)).subn(1);
const MAX_U16 = new BN(2).pow(new BN(16 - 2)).subn(1);
const MAX_U32 = new BN(2).pow(new BN(32 - 2)).subn(1);

// A new compact length-encoding algorithm. It performs the same function as Length, however
// differs in that it uses a variable number of bytes to do the actual encoding. From the Rust
// implementation for compact encoding
//
//     0b00 00 00 00 / 00 00 00 00 / 00 00 00 00 / 00 00 00 00
// (0 ... 2**6 - 1)    (u8)
//     xx xx xx 00
// (2**6 ... 2**14 - 1)  (u8, u16)  low LH high
//     yL yL yL 01 / yH yH yH yL
// (2**14 ... 2**30 - 1)  (u16, u32)  low LMMH high
//     zL zL zL 10 / zM zM zM zL / zM zM zM zM / zH zH zH zM
// (2**30 ... 2**536 - 1)  (u32, u64, u128, U256, U512, U520) straight LE-encoded
//     nn nn nn 11 [ / zz zz zz zz ]{4 + n}
//
// Note: we use *LOW BITS* of the LSB in LE encoding to encode the 2 bit key.
export default class CodecLength extends CodecBase<BN> {
  constructor (value: CodecLength | BN | number = new BN(0)) {
    super(
      value instanceof CodecLength
        ? value.raw
        : bnToBn(value)
    );
  }

  static decode (input: Uint8Array): BN {
    const flag = input[0] & 0b11;

    if (flag === 0b00) {
      return new BN(input[0]).shrn(2);
    } else if (flag === 0b01) {
      return u8aToBn(input.slice(0, 2), true).shrn(2);
    } else if (flag === 0b10) {
      return u8aToBn(input.slice(0, 4), true).shrn(2);
    }

    return u8aToBn(input.subarray(1, 5), true);
  }

  static encode (length: BN): Uint8Array {
    if (length.lte(MAX_U8)) {
      return new Uint8Array([length.toNumber() << 2]);
    } else if (length.lte(MAX_U16)) {
      return bnToU8a(length.shln(2).addn(0b01), 16, true);
    } else if (length.lte(MAX_U32)) {
      return bnToU8a(length.shln(2).addn(0b10), 32, true);
    }

    return u8aConcat(
      new Uint8Array([
        0b11
      ]),
      bnToU8a(length, 32, true)
    );
  }

  get length (): number {
    return this.raw.toNumber();
  }

  byteLength (): number {
    return this.toU8a().length;
  }

  fromJSON (): CodecLength {
    throw new Error('CodecLength::fromJSON: unimplemented');
  }

  fromNumber (value: BN | number): CodecLength {
    this.raw = bnToBn(value);

    return this;
  }

  fromU8a (input: Uint8Array): CodecLength {
    this.raw = CodecLength.decode(input);

    return this;
  }

  toJSON (): any {
    throw new Error('CodecLength::toJSON: unimplemented');
  }

  toNumber (): number {
    return this.raw.toNumber();
  }

  toString (): string {
    throw new Error('CodecLength::toString: unimplemented');
  }

  toU8a (): Uint8Array {
    return CodecLength.encode(this.raw);
  }

  setValue (value: BN | number): void {
    this.raw = bnToBn(value);
  }
}