// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import storage from '@polkadot/storage/testing';

import Api from './index';

const ADDR_ONE = '5EhmTa7fL6SdjgKXo9g6hetR6nHnRAmrtisoGFWEESjzECtY';
const ADDR_TWO = '5FjbQAHSptRU4Q7Py6zDsRnE7UkpZikJVg5nm1tmu3WuZXKd';

const ENC_ONE = '0xe541e84609054b9504b8316ea839b366';
const ENC_TWO = '0x924776c687da8e30afdd2ac87d2c67da';

describe('formatting', () => {
  let api;
  let provider;

  beforeEach(() => {
    provider = {
      send: jest.fn((method, params) =>
        Promise.resolve('0x0102')
      ),
      subscribe: jest.fn((type, method, params, subscription) =>
        subscription(null, {
          block: '0x1234',
          changes: [
            [ENC_ONE, '0x0102'],
            [ENC_TWO, '0x0201']
          ]
        })
      )
    };
    api = new Api(provider);
  });

  it('encodes key (with params), decoding response', () => {
    return api.state
      .getStorage([
        storage.balances.freeBalance, ADDR_ONE
      ])
      .then((value) => {
        expect(
          provider.send
        ).toHaveBeenCalledWith(
          'state_getStorage',
          [ENC_ONE]
        );
        expect(value.toNumber()).toEqual(513);
      });
  });

  it.skip('encodes multiple keys, decoding multiple results', (done) => {
    api.state
      .storage(
        [
          [storage.balances.freeBalance, ADDR_ONE],
          [storage.balances.freeBalance, ADDR_TWO]
        ],
        (error, value) => {
          expect(
            provider.subscribe
          ).toHaveBeenCalledWith(
            'state_storage',
            'state_subscribeStorage',
            [[ENC_ONE, ENC_TWO]],
            expect.anything()
          );
          expect(
            value.map((bn) => bn.toNumber())
          ).toEqual([513, 258]);

          done(error);
        });
  });
});
