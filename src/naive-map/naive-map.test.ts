import { expect, test } from 'vitest';
import { NaiveMap } from './naive-map';

const firstTestPairKey = '1';
const firstTestPairValue = 1;
const firstTestPair: [string, number] = [firstTestPairKey, firstTestPairValue];
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
  expect(map.has(firstTestPairKey)).toBe(true);
});

test('Check that NaiveMap does not have entry for given key', () => {
  const map = new NaiveMap<number>(testPairs);
  expect(map.has('notToBeFound')).toBe(false);
});

test('get value by key from NaiveMap', () => {
  const map = new NaiveMap<number>(testPairs);
  expect(map.get(firstTestPairKey)).toBe(firstTestPairValue);
});
