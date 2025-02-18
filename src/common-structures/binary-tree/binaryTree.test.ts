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

describe('set', () => {
  test('set value to right child when node has no children and new value is smaller than the current value', () => {
    const tree = new BinaryTree<number>(2, createrThan);
    tree.set(1);
    expect(tree.right).toBeInstanceOf(BinaryTree);
    expect(tree.right?.value).toBe(1);
  });
});
