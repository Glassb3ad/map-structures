import {
  createLinkedList,
  LinkedList,
} from '../common-structures/linked-list/linkedList';
import { Pair, toPairs } from '../common-structures/pair/pair';

export class FOMap<T> {
  linkedList: LinkedList<Pair<string, T>>;

  constructor(entries: Array<[string, T]> = []) {
    this.linkedList = createLinkedList(toPairs(entries));
  }
}
