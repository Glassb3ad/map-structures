import {
  createLinkedList,
  fold,
  LinkedList,
} from '../common-structures/linked-list/linkedList';
import { first, Pair, second, toPairs } from '../common-structures/pair/pair';

type Entry<T> = [string, T];
type Entries<T> = Array<Entry<T>>;
export class FOMap<T> {
  linkedList: LinkedList<Pair<string, T>>;

  constructor(entries: Entries<T> = []) {
    this.linkedList = createLinkedList(toPairs(entries));
  }

  toList(): Entries<T> {
    return fold<Pair<string, T>, Entries<T>>(
      this.linkedList,
      (pair, acc) => [...acc, [first(pair) as string, second(pair) as T]],
      []
    );
  }

  has(key: string): boolean {
    return fold<Pair<string, T>, boolean>(
      this.linkedList,
      (pair, acc) => (first(pair) === key ? true : acc),
      false
    );
  }

  get(key: string): T | undefined {
    return fold<Pair<string, T>, T | undefined>(
      this.linkedList,
      (pair, acc) => (first(pair) === key ? (second(pair) as T) : acc),
      undefined
    );
  }
}
