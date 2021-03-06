// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isU8a from '@polkadot/util/is/u8a';

import Base from './Base';

type EnumDef = {
  [index: number]: string
} | Array<string>;

// A codec wrapper for an enum. Enums are encoded as a single byte, where the byte
// is a zero-indexed value. This class allows you to retrieve the value either
// by `toNumber()` exposing the actual raw index, or `toString()` returning a
// string representation (as provided as part of the constructor)
//
// TODO:
//   - It would be great if this could actually wrap actual TS enums
export default class Enum extends Base<number> {
  private _enum: EnumDef;

  constructor (def: EnumDef, value: Enum | number = 0) {
    super(
      Enum.decodeEnum(value)
    );

    this._enum = def;
  }

  static decodeEnum (value: Enum | number = 0): number {
    if (value instanceof Enum) {
      return value.raw;
    } else if (isU8a(value)) {
      return value[0];
    } else {
      return value;
    }
  }

  byteLength (): number {
    return 1;
  }

  fromJSON (input: any): Enum {
    // FIXME We potentially want to assert that the value is actually inside this._enum
    this.raw = input;

    return this;
  }

  fromU8a (input: Uint8Array): Enum {
    // FIXME We potentially want to assert that the value is actually inside this._enum
    this.raw = input[0];

    return this;
  }

  toJSON (): any {
    return this.raw;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.raw]);
  }

  toNumber (): number {
    return this.raw;
  }

  toString (): string {
    return this._enum[this.raw] || `${this.raw}`;
  }
}
