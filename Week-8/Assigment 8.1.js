//Find the Depth of Tree
/*
@input {Tree}
@output {Number(depth)}
*/
const BinarySearchTree = require("./BinarySearchTree");

const findTreeDepth = (tree) => {
  if (tree.root == null) throw "Empty Tree";
  if (!tree.root.left && !tree.root.right) return 0;
  else {
  }
};
try {
  let binaryTree = new BinarySearchTree();
  binaryTree.insert(3);       
  binaryTree.insert(2);      
  binaryTree.insert(10);        
  binaryTree.insert(5);       
  binaryTree.insert(15);         
  binaryTree.insert(20);
  binaryTree.insert(17);
  console.log(binaryTree);
  let getDepth = findTreeDepth(binaryTree);
  console.log(getDepth);
} catch (e) {
  console.warn(e);
}
