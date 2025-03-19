import { Entry } from '@/map.class';

const compare = (str1: string, str2: string) => {
  const result = str1.localeCompare(str2);
  if (result === 0) {
    return 0;
  }
  return result > 0 ? 1 : -1;
};
export class BinaryTree<T> {
  key: string | null;
  value: T;
  left: BinaryTree<T> | null;
  right: BinaryTree<T> | null;

  constructor(entry: Entry<T>) {
    this.key = entry[0];
    this.value = entry[1];
    this.left = null;
    this.right = null;
  }

  get(key: string): T | null {
    if (!this.key) {
      return null;
    }
    const comp = compare(this.key, key);
    if (comp === 0) {
      return this.value;
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
    if (!this.key) {
      return false;
    }
    const comp = compare(this.key, key);
    if (comp === 0) {
      return true;
    }
    if (comp === 1 && this.left) {
      return this.left.has(key);
    }
    if (comp === -1 && this.right) {
      return this.right.has(key);
    }
    return false;
  }

  set(entry: Entry<T>) {
    if (!this.key) {
      this.key = entry[0];
      this.value = entry[1];
      return;
    }
    const comp = compare(this.key, entry[0]);
    if (comp === 1) {
      if (this.left) {
        this.left.set(entry);
      } else {
        this.left = new BinaryTree<T>(entry);
      }
    }
    if (comp === -1) {
      if (this.right) {
        this.right.set(entry);
      } else {
        this.right = new BinaryTree<T>(entry);
      }
    }
    if (comp === 0) {
      this.value = entry[1];
    }
  }

  delete(key: string) {
    if (this.right && this.right.key === key) {
      this.right = null;
    } else {
      this.left = null;
    }
  }
}
