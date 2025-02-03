import { expect, test, describe } from 'vitest';
import { createPair, first } from './util';

const firstItem = 'first';
const secondItem = 'second';

describe('Pair function', () => {
  test('Create pair', () => {
    const pair = createPair(firstItem, secondItem);
    expect(pair).toBeDefined();
  });

  test('Create pair', () => {
    const pair = createPair(firstItem, secondItem);
    expect(first(pair)).toBe(firstItem);
  });
});
