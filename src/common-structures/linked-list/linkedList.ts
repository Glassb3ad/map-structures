export type LinkedList<T> = ((flag: boolean) => T | LinkedList<T>) | null;

export const createLinkedList = <T>(entries: Array<T>): LinkedList<T> => {
  if (entries.length === 0) {
    return null;
  }
  const [entry, ...rest] = entries;
  return (boolean: boolean) => (boolean ? entry : createLinkedList(rest));
};

export const getItem = <T>(linkedList: LinkedList<T> | null) => (linkedList ? (linkedList(true) as T) : null);

export const next = <T>(linkedList: LinkedList<T>) => (linkedList ? (linkedList(false) as LinkedList<T>) : null);

export const fold = <T, U>(linkedList: LinkedList<T>, func: (item: T, acc: U) => U, acc: U): U => {
  if (!linkedList) {
    return acc;
  }
  const newAcc = func(getItem(linkedList) as T, acc);
  return fold(next(linkedList), func, newAcc);
};
