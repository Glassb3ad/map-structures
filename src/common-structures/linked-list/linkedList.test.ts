import { expect, test, describe } from 'vitest';
import { createLinkedList, getItem } from './linkedList';

const firstItem = 'first';
const secondItem = 'second';

describe('Linked list', () => {
  test('Create empty linked list', () => {
    const LinkedList = createLinkedList([]);
    expect(LinkedList).toBeNull();
  });

  test('Create linked list with one pair', () => {
    const LinkedList = createLinkedList<string>([firstItem]);
    expect(LinkedList).not.toBeNull();
    const item = LinkedList ? LinkedList(true) : null;
    expect(item).toEqual(item);
  });

  test('Create linked list with two pairs', () => {
    const LinkedList = createLinkedList<string>([firstItem, secondItem]);
    expect(LinkedList).not.toBeNull();
    const secondLink = LinkedList ? LinkedList(false) : null;
    expect(secondLink).toBeTypeOf('function');
    const secondPair =
      typeof secondLink === 'function' ? secondLink(true) : null;
    expect(secondPair).toEqual(secondItem);
  });

  describe('getItem', () => {
    test('return null if linked list is empty', () => {
      const linkedList = createLinkedList([]);
      const item = getItem(linkedList);
      expect(item).toBeNull();
    });

    test('return item', () => {
      const linkedList = createLinkedList([firstItem]);
      const item = getItem(linkedList);
      expect(item).toBe(firstItem);
    });
  });
});
