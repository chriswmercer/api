// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import VoteThreshold from './VoteThreshold';

describe('VoteThreshold', () => {
  it('starts with default value', () => {
    expect(
      new VoteThreshold().toString()
    ).toEqual('Super majority approval');
  });

  it('allows setting value in constructor', () => {
    expect(
      new VoteThreshold(2).toNumber()
    ).toEqual(2);
  });
});
