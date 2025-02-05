type LinkedList<T> = ((boolean: boolean) => T | LinkedList<T>) | null;

type CreateLinkedList = <T>(entries: Array<T>) => LinkedList<T>;

export const createLinkedList: CreateLinkedList = (entries) => {
  if (entries.length === 0) {
    return null;
  }
  const [entry, ...rest] = entries;
  return (boolean: boolean) => (boolean ? entry : createLinkedList(rest));
};
