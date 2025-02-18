export class BinaryTree<T> {
  left: T | null;
  right: T | null;
  createrThan: (a: T | null, b: T | null) => boolean;

  constructor(createrThan: (a: T | null, b: T | null) => boolean) {
    this.left = null;
    this.right = null;
    this.createrThan = createrThan;
  }
}
