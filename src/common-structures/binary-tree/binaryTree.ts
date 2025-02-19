export class BinaryTree<T> {
  value: T;
  left: BinaryTree<T> | null;
  right: BinaryTree<T> | null;
  compare: (a: T, b: T) => 1 | 0 | -1;

  constructor(value: T, compare: (a: T, b: T) => 1 | 0 | -1) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.compare = compare;
  }

  get(value: T) {
    const comp = this.compare(this.value, value);
    if (comp === 0) {
      return this.value;
    }
    if (comp === 1) {
      if (this.left) {
        return this.left.get(value);
      } else {
        return null;
      }
    }
    if (this.right) {
      return this.right.get(value);
    }
  }

  set(value: T) {
    const comp = this.compare(this.value, value);
    if (comp === 1) {
      if (this.left) {
        this.left.set(value);
      } else {
        this.left = new BinaryTree<T>(value, this.compare);
      }
    }
    if (comp === -1) {
      if (this.right) {
        this.right.set(value);
      } else {
        this.right = new BinaryTree<T>(value, this.compare);
      }
    }
    if (comp === 0) {
      this.value = value;
    }
  }
}
