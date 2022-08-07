const BinarySearchTree = require("./BinarySearchTree");

const validateTree = (tree) => {
  if (tree.root == null) throw "Empty Tree";
  if (!tree.root.left && !tree.root.right) return "Tree is Validated";
  let current = tree.root;
  while (current.left) {
    let currentValue = current.value;
    let leftNode = current.left;
    let leftValue = leftNode.value;
    if (leftValue > currentValue) return "left Tree is not validated";
    current = current.left;
    if(current.right){
        if(current.value > current.right.value) return 'left tree is not validated'
    }
  }
  current = tree.root;
  while (current.right) {
    let currentValue = current.value;
    let rightNode = current.right;
    let rightValue = rightNode.value;
    if (rightValue < currentValue) return "right Tree is not validated";
    current = current.right;
    if(current.left){
        if(current.value < current.left.value) return 'right tree is not validated'
    }
  }
  if (current.left == null && current.right == null) return "Tree is Validated";
};
try {
  let binaryTree = new BinarySearchTree();
  binaryTree.insert(30);
  binaryTree.insert(20);
  binaryTree.insert(10);
  binaryTree.insert(25);
  binaryTree.insert(40);
  binaryTree.insert(35);
  binaryTree.insert(45);
  binaryTree.insert(44);
  binaryTree.insert(50);
  let validate = validateTree(binaryTree);
  console.log(validate);
} catch (e) {
  console.warn(e);
}
