export type Pair<T, U> = (first: boolean) => T | U | null;

export const createPair =
  <T, U>(fst: T, snd: U): Pair<T, U> =>
  (first: boolean) =>
    first ? fst : snd;

export const first = <T, U>(pair: Pair<T, U>) => pair(true);
export const second = <T, U>(pair: Pair<T, U>) => pair(false);

type Empty = null;
type LinkedList<T> = ((boolean: boolean) => T | LinkedList<T>) | Empty;

type CreateLinkedList = <T>(
  entries: Array<[string, T]>
) => LinkedList<Pair<string, T>>;

export const createLinkedList: CreateLinkedList = (entries) => {
  if (entries.length === 0) {
    return null;
  }
  const [entry, ...rest] = entries;
  return (boolean: boolean) =>
    boolean ? createPair(entry[0], entry[1]) : createLinkedList(rest);
};
