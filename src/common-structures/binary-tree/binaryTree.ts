export class BinaryTree<T> {
  value: T;
  left: BinaryTree<T> | null;
  right: BinaryTree<T> | null;
  createrThan: (a: T, b: T) => boolean;

  constructor(value: T, createrThan: (a: T, b: T) => boolean) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.createrThan = createrThan;
  }

  set(val: T) {
    const newNode = new BinaryTree<T>(val, this.createrThan);
    if (this.createrThan(this.value, val)) {
      this.left = newNode;
    } else {
      this.right = newNode;
    }
  }
}
