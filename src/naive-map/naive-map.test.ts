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

test('get undefined by key if there is not associated key-value pair in NaiveMap', () => {
  const map = new NaiveMap<number>(testPairs);
  expect(map.get('notToBeFound')).toBeUndefined();
});

test('set new key-value pair to NaiveMap', () => {
  const map = new NaiveMap<number>(testPairs);
  map.set(['newKey', 1]);
  expect(map.get('newKey')).toBe(1);
});

test('if key-value pair exists replace the old value with new', () => {
  const map = new NaiveMap<number>(testPairs);
  map.set([firstTestPairKey, 200]);
  expect(map.get(firstTestPairKey)).toBe(200);
});

test('Does not introduce duplicate keys when input key already exists', () => {
  const map = new NaiveMap<number>(testPairs);
  map.set([firstTestPairKey, 200]);
  expect(map.map.filter((pair) => pair[0] === firstTestPairKey).length).toBe(1);
});
