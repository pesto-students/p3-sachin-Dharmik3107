const MyQueue = require('./customQueue')
const BinarySearchTree = require('./BinarySearchTree')

const levelOrder = (tree) =>{
    let result = [];
    let queue = new MyQueue();

    let current = tree.root;
    queue.enqueue(current);
    while(queue.size){
        current = queue.dequeue();
        result.push(current.value);
        if(current.left){
            queue.enqueue(current.left);
        }
        if(current.right){
            queue.enqueue(current.right);
        }
    }
    return result;
}
try{
const binaryTree = new BinarySearchTree();
binaryTree.insert(30);
binaryTree.insert(20);
binaryTree.insert(10);
binaryTree.insert(25);
binaryTree.insert(40);
binaryTree.insert(35);
binaryTree.insert(45);
const getList = levelOrder(binaryTree)
console.log(getList)
}catch(e){
    console.warn(e);
}