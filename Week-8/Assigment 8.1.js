/** 
*TODO:Find the Depth of Tree
*@input {Tree}
*@output {Number(depth)}
*/
//calling class from source
const BinarySearchTree = require("./BinarySearchTree");
//depth function created
const findTreeDepth = (tree) => {
  //necessary input checking condition
  if (tree.root == null) throw "Empty Tree";
  //if tree has only one element
  if (!tree.root.left && !tree.root.right) return 0;
  else {
    //making two counter to travel to last element
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
      //both are at last element then break the loop
      if(current.left == null && current.right == null) break;
    }
    //finding max depth and returning it
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
