import {
  createLinkedList,
  fold,
  LinkedList,
} from '../common-structures/linked-list/linkedList';
import { first, Pair, second, toPairs } from '../common-structures/pair/pair';

export class FOMap<T> {
  linkedList: LinkedList<Pair<string, T>>;

  constructor(entries: Array<[string, T]> = []) {
    this.linkedList = createLinkedList(toPairs(entries));
  }

  toList() {
    return fold<Pair<string, T>, Array<[string, T]>>(
      this.linkedList,
      (pair, acc) => {
        return [...acc, [first(pair) as string, second(pair) as T]];
      },
      []
    );
  }
}
