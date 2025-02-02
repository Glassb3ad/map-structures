import { expect, test, describe } from 'vitest';
import { NaiveMap } from './naive-map';

const firstTestPairKey = '1';
const firstTestPairValue = 1;
const firstTestPair: [string, number] = [firstTestPairKey, firstTestPairValue];
const testPairs: Array<[string, number]> = [firstTestPair, ['2', 2]];

describe('NaiveMap constructor', () => {
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
});

describe('NaiveMap.has', () => {
  test('Check that there is pair with given key', () => {
    const map = new NaiveMap<number>(testPairs);
    expect(map.has(firstTestPairKey)).toBe(true);
  });

  test('Check that there is no pair with given key', () => {
    const map = new NaiveMap<number>(testPairs);
    expect(map.has('notToBeFound')).toBe(false);
  });
});

describe('NaiveMap.get', () => {
  test('get value by key', () => {
    const map = new NaiveMap<number>(testPairs);
    expect(map.get(firstTestPairKey)).toBe(firstTestPairValue);
  });

  test('get undefined if there is no associated value for key', () => {
    const map = new NaiveMap<number>(testPairs);
    expect(map.get('notToBeFound')).toBeUndefined();
  });
});

describe('NaiveMap.set', () => {
  test('set new key-value pair', () => {
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
    expect(map.map.filter((pair) => pair[0] === firstTestPairKey).length).toBe(
      1
    );
  });
});

describe('NaiveMap.delete', () => {
  test('return true when key has value', () => {
    const map = new NaiveMap<number>(testPairs);
    expect(map.delete(firstTestPairKey)).toBe(true);
  });
});
