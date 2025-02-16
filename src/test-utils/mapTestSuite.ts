import { expect, test, describe } from 'vitest';
import { Map } from '../map.class';

const firstTestPairKey = '1';
const firstTestPairValue = 1;
const firstTestPair: [string, number] = [firstTestPairKey, firstTestPairValue];
const testPairs: Array<[string, number]> = [firstTestPair, ['2', 2]];

type MapConstructor = new <T>(args?: Array<[string, T]>) => Map<T>;

export const createConstructorTests = (MapClass: MapConstructor) =>
  describe('constructor', () => {
    test('Create NaiveMap', () => {
      const map = new MapClass<number>();
      expect(map).toBeInstanceOf(Map);
    });

    test('Create NaiveMap with initial values', () => {
      const map = new MapClass<number>(testPairs);
      testPairs.forEach(pair => {
        expect(map.toArray()).toContainEqual(pair);
      });
    });
  });

export const testHasMethod = (MapClass: MapConstructor) => {
  describe('has', () => {
    test('Check that there is pair with given key', () => {
      const map = new MapClass<number>(testPairs);
      expect(map.has(firstTestPairKey)).toBe(true);
    });

    test('Check that there is no pair with given key', () => {
      const map = new MapClass<number>(testPairs);
      expect(map.has('notToBeFound')).toBe(false);
    });
  });
};

export const testGetMethod = (MapClass: MapConstructor) => {
  describe('get', () => {
    test('get value by key', () => {
      const map = new MapClass<number>(testPairs);
      expect(map.get(firstTestPairKey)).toBe(firstTestPairValue);
    });

    test('get undefined if there is no associated value for key', () => {
      const map = new MapClass<number>(testPairs);
      expect(map.get('notToBeFound')).toBeUndefined();
    });
  });
};

export const testSetMethod = (MapClass: MapConstructor) => {
  describe('set', () => {
    test('set new key-value pair', () => {
      const map = new MapClass<number>(testPairs);
      map.set(['newKey', 1]);
      expect(map.get('newKey')).toBe(1);
    });

    test('if key-value pair exists replace the old value with new', () => {
      const map = new MapClass<number>(testPairs);
      map.set([firstTestPairKey, 200]);
      expect(map.get(firstTestPairKey)).toBe(200);
    });

    test('Does not introduce duplicate keys when input key already exists', () => {
      const map = new MapClass<number>(testPairs);
      map.set([firstTestPairKey, 200]);
      expect(map.toArray().filter(pair => pair[0] === firstTestPairKey).length).toBe(1);
    });
  });
};

export const testDeleteMethod = (MapClass: MapConstructor) => {
  describe('delete', () => {
    test('return true when key has value', () => {
      const map = new MapClass<number>(testPairs);
      expect(map.delete(firstTestPairKey)).toBe(true);
    });

    test('remove key-value pair that matches key', () => {
      const map = new MapClass<number>(testPairs);
      map.delete(firstTestPairKey);
      expect(map.toArray()).not.toContainEqual(firstTestPair);
    });

    test('Does not remove key-value pairs that do not match key', () => {
      const map = new MapClass<number>(testPairs);
      map.delete(firstTestPairKey);
      expect(map.toArray()).toContainEqual(['2', 2]);
    });
  });
};

export const testMapStructure = (MapClass: MapConstructor) => {
  [createConstructorTests, testHasMethod, testGetMethod, testSetMethod, testDeleteMethod].forEach(func => {
    func(MapClass);
  });
};
