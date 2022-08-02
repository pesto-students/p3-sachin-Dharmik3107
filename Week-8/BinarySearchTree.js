class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  get isEmpty() {
    return this.root === null;
  }
  insert(value) {
    if (!Number.isInteger(value)) throw "Invalid Value";
    let newNode = new Node(value);
    if (this.isEmpty) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right == null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          throw "Value is present in tree,try another value";
        }
      }
    }
  }
  find(value) {
    if (this.isEmpty) return false;
    else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value < current.left) {
          current = current.left;
        } else if (value > current.right) {
          current = current.right;
        } else {
          this.found = true;
        }
      }
      return found;
    }
  }
}

