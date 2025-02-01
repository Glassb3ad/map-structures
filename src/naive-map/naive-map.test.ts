import { expect, test } from 'vitest';
import { NaiveMap } from './naive-map';

test('Create NaiveMap', () => {
  const map = new NaiveMap();
  expect(map).toBeInstanceOf(NaiveMap);
});

test('Create NaiveMap with initial values', () => {
  const initialPairs: Array<[string, number]> = [
    ['1', 1],
    ['2', 2],
  ];
  const map = new NaiveMap<number>(initialPairs);
  initialPairs.forEach((pair) => {
    expect(map.map).toContainEqual(pair);
  });
});
