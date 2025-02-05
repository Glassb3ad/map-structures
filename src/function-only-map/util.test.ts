import { expect, test, describe } from 'vitest';
import { createLinkedList } from './util';

const firstItem = 'first';
const secondItem = 'second';

describe('Linked list', () => {
  test('Create empty linked list', () => {
    const LinkedList = createLinkedList([]);
    expect(LinkedList).toBeNull();
  });

  test('Create linked list with one pair', () => {
    const LinkedList = createLinkedList<[string, string]>([
      [firstItem, secondItem],
    ]);
    expect(LinkedList).not.toBeNull();
    const firstPair = LinkedList ? LinkedList(true) : null;
    expect(firstPair).toEqual([firstItem, secondItem]);
  });

  test('Create linked list with two pairs', () => {
    const LinkedList = createLinkedList<[string, string]>([
      [firstItem, secondItem],
      ['2', '2'],
    ]);
    expect(LinkedList).not.toBeNull();
    const secondLink = LinkedList ? LinkedList(false) : null;
    expect(secondLink).toBeTypeOf('function');
    const secondPair =
      typeof secondLink === 'function' ? secondLink(true) : null;
    expect(secondPair).toEqual(['2', '2']);
  });
});
