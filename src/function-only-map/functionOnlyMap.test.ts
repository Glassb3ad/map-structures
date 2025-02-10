import { expect, test, describe } from 'vitest';
import { FOMap } from './functionOnlyMap';

const firstTestPairKey = '1';
const firstTestPairValue = 1;
const firstTestPair: [string, number] = [firstTestPairKey, firstTestPairValue];
const testPairs: Array<[string, number]> = [firstTestPair, ['2', 2]];

describe('FOMap', () => {
  describe('constructor', () => {
    test('Create FOMap', () => {
      const map = new FOMap();
      expect(map).toBeInstanceOf(FOMap);
    });

    test('Create map with initial values', () => {
      const map = new FOMap<number>(testPairs);
      const list = map.toList();
      expect(list).toEqual(testPairs);
    });
  });

  describe('has', () => {
    test('Check that there is pair with given key', () => {
      const map = new FOMap<number>(testPairs);
      expect(map.has(firstTestPairKey)).toBe(true);
    });

    test('Check that there is no pair with given key', () => {
      const map = new FOMap<number>(testPairs);
      expect(map.has('notToBeFound')).toBe(false);
    });
  });

  describe('get', () => {
    test('get value by key', () => {
      const map = new FOMap<number>(testPairs);
      expect(map.get(firstTestPairKey)).toBe(firstTestPairValue);
    });

    test('get undefined if there is no associated value for key', () => {
      const map = new FOMap<number>(testPairs);
      expect(map.get('notToBeFound')).toBeUndefined();
    });
  });

  describe('set', () => {
    test('set new key-value pair', () => {
      const map = new FOMap<number>(testPairs);
      map.set(['newKey', 1]);
      expect(map.get('newKey')).toBe(1);
    });

    test('if key-value pair exists replace the old value with new', () => {
      const map = new FOMap<number>(testPairs);
      map.set([firstTestPairKey, 200]);
      expect(map.get(firstTestPairKey)).toBe(200);
    });

    test('Does not introduce duplicate keys when input key already exists', () => {
      const map = new FOMap<number>(testPairs);
      map.set([firstTestPairKey, 200]);
      expect(
        map.toList().filter((pair) => pair[0] === firstTestPairKey).length
      ).toBe(1);
    });
  });

  describe('delete', () => {
    test('return true when key has value', () => {
      const map = new FOMap<number>(testPairs);
      expect(map.delete(firstTestPairKey)).toBe(true);
    });

    test('remove key-value pair that matches key', () => {
      const map = new FOMap<number>(testPairs);
      map.delete(firstTestPairKey);
      expect(map.toList()).not.toContainEqual(firstTestPair);
    });

    test('Does not remove key-value pairs that do not match key', () => {
      const map = new FOMap<number>(testPairs);
      map.delete(firstTestPairKey);
      expect(map.toList()).toContainEqual(['2', 2]);
    });
  });
});
