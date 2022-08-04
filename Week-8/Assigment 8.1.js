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
    let leftCounter = 0;
    let rightCounter = 0;
    while(true){
      let current = tree.root;
      while(current.left){
        current = current.left;
        console.log(current.left,'left')
        leftCounter++;
      }
      current = tree.root;
      while(current.right){
        current = current.right;
        console.log(current.right,'right')
        rightCounter++;
      }
      if(current.left == null && current.right == null) break;
    }
    let depth = Math.max(leftCounter,rightCounter);
    return depth;
  }
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
  binaryTree.insert(34);
  console.log(binaryTree);
  let getDepth = findTreeDepth(binaryTree);
  console.log(getDepth)
} catch (e) {
  console.warn(e);
}
