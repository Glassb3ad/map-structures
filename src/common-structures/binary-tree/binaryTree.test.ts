import { expect, test, describe } from 'vitest';
import { BinaryTree } from './binaryTree';

const compare = (a: number, b: number) => {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

const comparePairs = (a: [number, string], b: [number, string]) => compare(a[0], b[0]);

describe('constructor', () => {
  test('Create tree', () => {
    const tree = new BinaryTree<number>(2, compare);
    expect(tree).toBeInstanceOf(BinaryTree);
  });

  test('Initial value is set', () => {
    const tree = new BinaryTree<number>(2, compare);
    expect(tree.value).toBe(2);
  });
});

describe('get', () => {
  test('return nodes value when target value is equal to node value', () => {
    const tree = new BinaryTree<[number, string]>([1, 'hello'], comparePairs);
    expect(tree.get([1, ''])).toEqual([1, 'hello']);
  });

  test('search from left child when target value is smaller than node value', () => {
    const tree = new BinaryTree<[number, string]>([1, 'smthng'], comparePairs);
    tree.left = new BinaryTree<[number, string]>([0.5, 'hello'], comparePairs);
    expect(tree.get([0.5, ''])).toEqual([0.5, 'hello']);
  });

  test('return null when target value is smaller than node value and left child is null', () => {
    const tree = new BinaryTree<[number, string]>([1, 'smthng'], comparePairs);
    expect(tree.get([0.5, ''])).toBeNull();
  });

  test('search from right child when target value is greater than node value', () => {
    const tree = new BinaryTree<[number, string]>([1, 'smthng'], comparePairs);
    tree.right = new BinaryTree<[number, string]>([2, 'hello'], comparePairs);
    expect(tree.get([2, ''])).toEqual([2, 'hello']);
  });

  test('return null when target value is greater than node value and right child is null', () => {
    const tree = new BinaryTree<[number, string]>([1, 'smthng'], comparePairs);
    expect(tree.get([2, ''])).toBeNull();
  });
});

describe('set', () => {
  test('set value to right child when node has no children and new value is creater than the current value', () => {
    const tree = new BinaryTree<number>(2, compare);
    tree.set(3);
    expect(tree.right).toBeInstanceOf(BinaryTree);
    expect(tree.right?.value).toBe(3);
  });

  test('set value to left child when node has no children and new value is smaller than the current value', () => {
    const tree = new BinaryTree<number>(2, compare);
    tree.set(1);
    expect(tree.left).toBeInstanceOf(BinaryTree);
    expect(tree.left?.value).toBe(1);
  });

  test('set value to left grandchild when node has left children and new value is smaller than previous values', () => {
    const tree = new BinaryTree<number>(3, compare);
    tree.left = new BinaryTree<number>(2, compare);
    tree.set(1);
    const child = tree.left;
    expect(child.left).not.toBeNull();
    expect(child.left?.value).toBe(1);
  });

  test('set value to right grandchild of right node when node has right children and new value is larger than previous values', () => {
    const tree = new BinaryTree<number>(2, compare);
    tree.right = new BinaryTree<number>(3, compare);
    tree.set(4);
    const child = tree.right;
    expect(child.right).not.toBeNull();
    expect(child.right?.value).toBe(4);
  });

  test('if new value equals current value, replace current value with new value', () => {
    const tree = new BinaryTree<[number, string]>([2, 'hello'], comparePairs);
    tree.set([2, 'holle']);
    expect(tree.value).toEqual([2, 'holle']);
  });
});
