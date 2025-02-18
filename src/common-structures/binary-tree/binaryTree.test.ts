import { expect, test, describe } from 'vitest';
import { BinaryTree } from './binaryTree';

const createrThan = (a: number, b: number) => a >= b;

describe('constructor', () => {
  test('Create tree', () => {
    const tree = new BinaryTree<number>(2, createrThan);
    expect(tree).toBeInstanceOf(BinaryTree);
  });

  test('Initial value is set', () => {
    const tree = new BinaryTree<number>(2, createrThan);
    expect(tree.value).toBe(2);
  });
});
