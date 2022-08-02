/*
Code to left-shift the linked list by k nodes,where k is a given positive 
integer smaller than or equal to length of the linked list
input = 2=>3=>4=>5=>6
RotateValue = 3
step:1 = 3=>4=>5=>6=>2 
step:2 = 4=>5=>6=>2=>3
step:3 = 5=>6=>2=>3=>4
*/

const singleLinkedList = require("./LinkedList");
//function to create list rotate by nth number
const rotateList = (list, rotateValue) => {
  //if rotatevalue = 0 then return same list
  if(rotateValue === 0) return list.log;
  //pointer and counter 
  let current = list.head;
  let counter = 0;

  //move pointer to value-1 (if -1 is not there then pointer = index)
  while(counter != rotateValue-1) {
    current = current.next;
    counter++; 
  }
  //condition if current value is null then return same list
  //value = length of list
  if(current == null) return list.log;
  //creating value node at the position of rotateValue
  let valueNode = current;
  //mpviing pointer toward the end of list
  while(current.next){
    current = current.next;
  }
  //moving element and setting new head and tail
  current.next = list.head;
  list.head = valueNode.next;
  valueNode.next = null;
  list.tail = valueNode;
  //return rotated list
  return list
};
try {
  let getList = new singleLinkedList();
  getList.push(2);
  getList.push(3);
  getList.push(4);
  getList.push(5);
  getList.push(6);
  let getRotatedList = rotateList(getList, 3);
  getRotatedList.log

} catch (e) {
  console.warn(e);
}
