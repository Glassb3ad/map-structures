import { expect, test } from 'vitest';
import { NaiveMap } from './naive-map';

const firstTestPairKey = '1';
const firstTestPair: [string, number] = [firstTestPairKey, 1];
const testPairs: Array<[string, number]> = [firstTestPair, ['2', 2]];

test('Create NaiveMap', () => {
  const map = new NaiveMap();
  expect(map).toBeInstanceOf(NaiveMap);
});

test('Create NaiveMap with initial values', () => {
  const map = new NaiveMap<number>(testPairs);
  testPairs.forEach((pair) => {
    expect(map.map).toContainEqual(pair);
  });
});

test('Check that NaiveMap has entry for given key', () => {
  const map = new NaiveMap<number>(testPairs);
  expect(map.has('1')).toBe(true);
});
