//Node class to create new Node to insert a new element in LinkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//class for singleLinkedList
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = 10;
  }
  //to check list is empty or not
  get isEmpty() {
    return this.size === 0;
  }
  //helper function to push element at the end of the list
  push(item) {
    //pointer
    let current;
    //pre-checking conditions
    if (this.size === this.maxSize) throw "List Overflow";
    if (!Number.isInteger(item)) throw "Invalid Value";
    //creating new node to add
    let newNode = new Node(item);
    //if there is no element in list-new element will be head
    if (this.head === null) {
      this.head = newNode;
    } else { //moving pointer to current last element and add new element after it
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      //chaging the tail to new element
      this.tail = newNode;
    }
    //size increment
    this.size++;
    return this;
  }
  //helper function to remove element from end of list
  pop() {
    //pointer
    let current;
    //necessory checking condition
    if (this.size === 0) throw "List Underflow";
    if (!Number.isInteger(item)) throw "Invalid Value";
    current = this.head;
    let newTail = current;
    //moving pointer to last element
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    //changing tail 
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    //condition for popping last element
    if (this.isEmpty) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //helper function to remove element from beginning
  shift() {
    if (this.size === 0) throw "List Underflow";
    //changing head
    let current = this.head;
    this.head = current.next;
    this.size--;
    //condition for last element
    if (this.isEmpty) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //helper function to add element to beginning
  unshift(item) {
    //necessory checking condition
    if (this.size === this.maxSize) throw "List Overflow";
    if (!Number.isInteger(item)) throw "Invalid Value";
    //creating new node for new element
    let newNode = new Node(item);
    //if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //changing head
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }
  //helper function to add element at the given index
  insert(item, index) {
    //checking necessory condition
    if (this.size === this.maxSize) throw "List Overflow";
    if (!Number.isInteger(item)) throw "Invalid Value";
    if (!Number.isInteger(index)) throw "Invalid index";
    if (index > this.size) throw "Index is out of size";
    if (index < 0) throw "Index should be positive integer";
    //creating new node for new element
    let newNode = new Node(item);
    //index = size then it is pushing process
    if (index === this.size) {
      this.push(item);
      return true;
    }
    //index = 0 then it is unshifting process
    if (index === 0) {
      this.unshift(item);
      return true;
    }
    //index is random
    let prevNode = this.getNode(index - 1);
    let oldNode = prevNode.next;
    newNode.next = oldNode;
    prevNode.next = newNode;
    this.size++;
    return true;
  }
  //helper function to delete element at particular index
  delete(item, index) {
    //checking necessory function
    if (this.size === this.maxSize) throw "List Overflow";
    if (!Number.isInteger(item)) throw "Invalid Value";
    if (!Number.isInteger(index)) throw "Invalid index";
    if (index > this.size) throw "Index is out of size";
    if (index < 0) throw "Index should be positive integer";
    //index = last element then it is popping process
    if (index === this.size-1) {
      let deleteditem = this.pop(item);
      return deleteditem;
    }
    //index = 0 then it is shifting process
    if (index === 0) {
      deleteditem = this.shift(item);
      return deleteditem;
    }
    //random index
    let prevNode = this.getNode(index - 1);
    let oldNode = prevNode.next;
    let newNode = oldNode.next;
    prevNode.next = newNode;
    this.size--;
    return oldNode;
  }
  //helper function to reverse the linked list with same next 
  reverse() {
    //if only one element then reverse will be the same
    if(this.size <= 1) return this;
    //if more than one element
    let tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;
    let nextNode = 0;
    let prevNode = 0;
    //loop for swapping element 
    for(let iIndex = 0; iIndex < this.size; iIndex++){
      nextNode = tempNode.next;
      tempNode.next = prevNode;
      prevNode = tempNode;
      tempNode = nextNode;
    }
    return this;
  }
  //helper function to get node at particular index
  getNode(index) {
    //necessory checking condition
    if (!Number.isInteger(index)) throw "Invalid index";
    if (index >= this.size) throw "Index is out of size";
    if (index < 0) throw "Index should be positive integer";
    if (index >= this.size || index < 0) return null;
    //setting pointer
    let current = this.head;
    let pointer = 0;
    //moving pointer to index
    while (pointer != index) {
      current = current.next;
      pointer++;
    }
    return current;
  }
  //helper function to get the visual representation of linked list
  get log() {
    //auxiliary space to store all node and connecting by arrow
    let list = [];
    if (this.size === 0) return "Empty";
    list.push(this.head.value);
    let current = this.head;
    while (current.next) {
      let node = current.next;
      list.push(node.value);
      current = node;
    }
    console.log(list.join(" => "));
    return;
  }
}

module.exports = (SingleLinkedList)
