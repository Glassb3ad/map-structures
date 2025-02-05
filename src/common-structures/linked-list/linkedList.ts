type LinkedList<T> = ((boolean: boolean) => T | LinkedList<T>) | null;

export const createLinkedList = <T>(entries: Array<T>): LinkedList<T> => {
  if (entries.length === 0) {
    return null;
  }
  const [entry, ...rest] = entries;
  return (boolean: boolean) => (boolean ? entry : createLinkedList(rest));
};

export const getItem = <T>(linkedList: LinkedList<T>) => {
  if (!linkedList) return null;
  return linkedList(true) as T;
};
