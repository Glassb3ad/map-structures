import { expect, test, describe } from 'vitest';
import { FOMap } from './functionOnlyMap';

const firstTestPairKey = '1';
const firstTestPairValue = 1;
const firstTestPair: [string, number] = [firstTestPairKey, firstTestPairValue];
const testPairs: Array<[string, number]> = [firstTestPair, ['2', 2]];

describe('FOMap constructor', () => {
  test('Create FOMap', () => {
    const map = new FOMap();
    expect(map).toBeInstanceOf(FOMap);
  });

  test('Create FOMap with initial values', () => {
    const map = new FOMap<number>(testPairs);
    const list = map.toList();
    expect(list).toEqual(testPairs);
  });
});
