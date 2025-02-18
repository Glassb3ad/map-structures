import { expect, test, describe } from 'vitest';
import { BinaryTree } from './binaryTree';

const createrThan = (a: number | null, b: number | null) => {
  if (!b) {
    return true;
  }
  if (!a) {
    return false;
  }
  return a >= b;
};

describe('constructor', () => {
  test('Create tree', () => {
    const tree = new BinaryTree<number>(createrThan);
    expect(tree).toBeInstanceOf(BinaryTree);
  });
});
