//Given a linked list of N nodes. The task is to reverse this list.
//input linked list = [11,12,13,14,15,16,17]
//output reversed List = [17,16,15,14,13,12,11]
//importing LinkedList with its helper function
const singleLinkedList = require('./LinkedList');
//creating new list
let newList = new singleLinkedList();
//adding element by pushing
newList.push(11);
newList.push(12);
newList.push(13);
newList.push(14);
newList.push(15);
newList.push(16);
newList.push(17);
//logging the list
newList.log
//reversing the list
newList.reverse();
//logging reversed list
newList.log