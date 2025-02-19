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
  test('set value to right child when node has no children and new value is creater than the current value', () => {
    const tree = new BinaryTree<number>(2, createrThan);
    tree.set(3);
    expect(tree.right).toBeInstanceOf(BinaryTree);
    expect(tree.right?.value).toBe(3);
  });

  test('set value to left child when node has no children and new value is smaller than the current value', () => {
    const tree = new BinaryTree<number>(2, createrThan);
    tree.set(1);
    expect(tree.left).toBeInstanceOf(BinaryTree);
    expect(tree.left?.value).toBe(1);
  });

  test('set value to grandchild when node has left children and new value is smaller than previous values', () => {
    const tree = new BinaryTree<number>(2, createrThan);
    tree.set(1);
    tree.set(0.5);
    const child = tree.left;
    expect(child).not.toBeNull();
    expect(child?.value).toBe(1);
    if (child) {
      expect(child.left).not.toBeNull();
      expect(child.left?.value).toBe(0.5);
    }
  });
});
