import { Entries, Map } from '@/map.class';
import { createLinkedList, fold, LinkedList } from '../common-structures/linked-list/linkedList';
import { createPair, first, Pair, second, toPairs } from '../common-structures/pair/pair';

type ListAccumulator<T> = ((scnd: LinkedList<Pair<string, T>>) => LinkedList<Pair<string, T>>) | undefined;
export class FOMap<T> extends Map<T> {
  linkedList: LinkedList<Pair<string, T>>;

  constructor(entries: Entries<T> = []) {
    super();
    this.linkedList = createLinkedList(toPairs(entries));
  }

  toArray(): Entries<T> {
    return fold<Pair<string, T>, Entries<T>>(
      this.linkedList,
      (pair, acc) => [...acc, [first(pair) as string, second(pair) as T]],
      [],
    );
  }

  has(key: string): boolean {
    return fold<Pair<string, T>, boolean>(this.linkedList, (pair, acc) => (first(pair) === key ? true : acc), false);
  }

  get(key: string): T | undefined {
    return fold<Pair<string, T>, T | undefined>(
      this.linkedList,
      (pair, acc) => (first(pair) === key ? (second(pair) as T) : acc),
      undefined,
    );
  }

  set([key, value]: [string, T]): this {
    const newPair = createPair(key, value);
    const [linkedListAcc, hasKey] = fold<Pair<string, T>, [ListAccumulator<T>, boolean]>(
      this.linkedList,
      (pair, acc) => {
        const matchesKey = first(pair) === key;
        const listItem = matchesKey ? newPair : pair;
        const listAccumulator = (scnd: LinkedList<Pair<string, T>>) =>
          acc[0] ? acc[0]((bool: boolean) => (bool ? listItem : scnd)) : (bool: boolean) => (bool ? listItem : scnd);
        return [listAccumulator, matchesKey || acc[1]];
      },
      [undefined, false],
    );

    if (!linkedListAcc) {
      this.linkedList = null;
    } else if (hasKey) {
      this.linkedList = linkedListAcc(null);
    } else {
      this.linkedList = linkedListAcc(bool => (bool ? createPair(key, value) : null));
    }
    return this;
  }

  delete(key: string): boolean {
    const [listAccumulator, hasKey] = fold<Pair<string, T>, [ListAccumulator<T>, boolean]>(
      this.linkedList,
      (pair, acc) => {
        const matchesKey = first(pair) === key;
        if (matchesKey) {
          return [acc[0], true];
        }
        const newListAccumulator = (scnd: LinkedList<Pair<string, T>>) =>
          acc[0] ? acc[0]((bool: boolean) => (bool ? pair : scnd)) : (bool: boolean) => (bool ? pair : scnd);
        return [newListAccumulator, acc[1]];
      },
      [undefined, false],
    );
    if (hasKey && listAccumulator) {
      this.linkedList = listAccumulator(null);
      return true;
    }
    return false;
  }
}
