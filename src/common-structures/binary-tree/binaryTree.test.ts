import { expect, test, describe } from 'vitest';
import { BinaryTree } from './binaryTree';

describe('constructor', () => {
  test('Create tree', () => {
    const tree = new BinaryTree<number>(['key', 2]);
    expect(tree).toBeInstanceOf(BinaryTree);
  });

  test('Initial entry is set', () => {
    const tree = new BinaryTree<number>(['key', 2]);
    expect(tree.value).toEqual(['key', 2]);
  });
});

describe('get', () => {
  test('return nodes value when target value is equal to node value', () => {
    const tree = new BinaryTree<string>(['a', 'hello']);
    expect(tree.get('a')).toEqual('hello');
  });

  test('search from left child when target value is smaller than node value', () => {
    const tree = new BinaryTree<string>(['b', 'stmhing']);
    tree.left = new BinaryTree<string>(['a', 'hello']);
    expect(tree.get('a')).toEqual('hello');
  });

  test('return null when target value is smaller than node value and left child is null', () => {
    const tree = new BinaryTree<string>(['a', 'smthng']);
    expect(tree.get('b')).toBeNull();
  });

  test('search from right child when target value is greater than node value', () => {
    const tree = new BinaryTree<string>(['a', 'smthng']);
    tree.right = new BinaryTree<string>(['b', 'hello']);
    expect(tree.get('b')).toEqual('hello');
  });

  test('return null when target value is greater than node value and right child is null', () => {
    const tree = new BinaryTree<string>(['b', 'smthng']);
    expect(tree.get('a')).toBeNull();
  });
});

describe('set', () => {
  test('set value to right child when node has no children and new value is creater than the current value', () => {
    const tree = new BinaryTree<number>(['a', 2]);
    tree.set(['b', 3]);
    expect(tree.right).toBeInstanceOf(BinaryTree);
    expect(tree.right?.value[1]).toBe(3);
  });

  test('set value to left child when node has no children and new value is smaller than the current value', () => {
    const tree = new BinaryTree<number>(['b', 2]);
    tree.set(['a', 3]);
    expect(tree.left).toBeInstanceOf(BinaryTree);
    expect(tree.left?.value[1]).toBe(3);
  });

  test('set value to left grandchild when node has left children and new value is smaller than previous values', () => {
    const tree = new BinaryTree<number>(['c', 3]);
    tree.left = new BinaryTree<number>(['b', 2]);
    tree.set(['a', 4]);
    const child = tree.left;
    expect(child.left).not.toBeNull();
    expect(child.left?.value[1]).toBe(4);
  });

  test('set value to right grandchild of node when node has right children and new value is larger than previous values', () => {
    const tree = new BinaryTree<number>(['a', 2]);
    tree.right = new BinaryTree<number>(['b', 3]);
    tree.set(['c', 4]);
    const child = tree.right;
    expect(child.right).not.toBeNull();
    expect(child.right?.value[1]).toBe(4);
  });

  test('if new value equals current value, replace current value with new value', () => {
    const tree = new BinaryTree<string>(['a', 'smthing']);
    tree.set(['a', 'hello']);
    expect(tree.value[1]).toBe('hello');
  });
});
