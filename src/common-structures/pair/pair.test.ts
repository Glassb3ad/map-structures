import { expect, test, describe } from 'vitest';
import { createPair, first, second, toPair } from './pair';

const firstItem = 'first';
const secondItem = 'second';

describe('Pair function', () => {
  test('Create pair', () => {
    const pair = createPair(firstItem, secondItem);
    expect(pair).toBeDefined();
  });

  test('get first pair', () => {
    const pair = createPair(firstItem, secondItem);
    expect(first(pair)).toBe(firstItem);
  });

  test('get second pair', () => {
    const pair = createPair(firstItem, secondItem);
    expect(second(pair)).toBe(secondItem);
  });

  test('list to pair', () => {
    const pair = toPair([firstItem, secondItem]);
    expect(pair(true)).toBe(firstItem);
    expect(pair(false)).toBe(secondItem);
  });
});
