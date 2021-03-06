// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import U64 from './U64';

// The Nonce or number of transactiosn sent by a specific account. Generally used
// with extrinsics to determine the order of execution.
export default class Index extends U64 {
}
