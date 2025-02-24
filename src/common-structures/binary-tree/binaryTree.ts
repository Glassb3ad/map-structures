import { Entry } from '@/map.class';

const compare = (str1: string, str2: string) => {
  const result = str1.localeCompare(str2);
  if (result === 0) {
    return 0;
  }
  return result > 0 ? 1 : -1;
};
export class BinaryTree<T> {
  value: Entry<T>;
  left: BinaryTree<T> | null;
  right: BinaryTree<T> | null;

  constructor(value: Entry<T>) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  get(key: string): T | null {
    const comp = compare(this.value[0], key);
    if (comp === 0) {
      return this.value[1];
    }
    if (comp === 1 && this.left) {
      return this.left.get(key);
    }
    if (comp === -1 && this.right) {
      return this.right.get(key);
    }
    return null;
  }

  has(key: string): boolean {
    return true;
  }

  set(value: Entry<T>) {
    const comp = compare(this.value[0], value[0]);
    if (comp === 1) {
      if (this.left) {
        this.left.set(value);
      } else {
        this.left = new BinaryTree<T>(value);
      }
    }
    if (comp === -1) {
      if (this.right) {
        this.right.set(value);
      } else {
        this.right = new BinaryTree<T>(value);
      }
    }
    if (comp === 0) {
      this.value = value;
    }
  }
}
