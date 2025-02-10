import { expect, test, describe } from 'vitest';
import { FOMap } from './functionOnlyMap';

// const firstTestPairKey = '1';
// const firstTestPairValue = 1;
// const firstTestPair: [string, number] = [firstTestPairKey, firstTestPairValue];
// const testPairs: Array<[string, number]> = [firstTestPair, ['2', 2]];

describe('NaiveMap constructor', () => {
  test('Create NaiveMap', () => {
    const map = new FOMap();
    expect(map).toBeInstanceOf(FOMap);
  });

  //   test('Create NaiveMap with initial values', () => {
  //     const map = new NaiveMap<number>(testPairs);
  //     testPairs.forEach((pair) => {
  //       expect(map.map).toContainEqual(pair);
  //     });
  //   });
});
