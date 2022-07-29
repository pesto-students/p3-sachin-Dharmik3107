//Implement queue from two stacks
//Importing stack
const MyStack = require("./customStack");
//creating Queue function
class Queue {
  constructor() {
    //calling two stack using customStack
    this.firstStack = new MyStack();
    this.secondStack = new MyStack();
  }
  //helper function to add element at beginning of queue
  enqueue(item) {
    //if stack 1 is not zero then trasfer all data to stack 2
    if (this.firstStack.size !== 0) {
      while (this.firstStack.size !== 0) {
        this.secondStack.push(this.firstStack.pop());
      }
    }
    //add new item to stack 1 so it will only be element
    if (this.firstStack.size === 0) {
      this.firstStack.push(item);
    }
    //now again retransfer all data from stack 2 to stack 1 at the end of stack
    while (this.secondStack.size !== 0) {
      this.firstStack.push(this.secondStack.pop());
    }
  }
  //helper function to remove element at beginning of queue
  dequeue() {
    let poppedItem;
    if (this.firstStack.size === 0) throw "Queue is Empty";
    //if stack 1 is not zero then trasfer all data to stack 2
    if (this.firstStack.size !== 0) {
      while (this.firstStack.size !== 0) {
        this.secondStack.push(this.firstStack.pop());
      }
    }
    //remove last item from stack 2 
    if (this.secondStack.size !== 0) {
      poppedItem = this.secondStack.pop();
      //transfer remaining data to stack 1
      while (this.secondStack.size !== 0) {
        this.firstStack.push(this.secondStack.pop());
      }
    }
    return poppedItem;
  }
  //logging function
  get log(){
    return console.log(this.firstStack.items);
  }
}
const customQueue = new Queue();
customQueue.enqueue(20);
customQueue.enqueue(30);
customQueue.enqueue(40);
customQueue.dequeue();
customQueue.log;
