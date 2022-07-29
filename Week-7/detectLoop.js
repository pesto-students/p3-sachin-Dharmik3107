const singleLinkedList = require('./LinkedList');
//function to create loop in list
const createLoop = (list) => {
    let currentHead = list.head;
    let currentTail = list.tail;
    currentTail.next = currentHead.next.next;
    return list;
}

//function to detect loop in list
const loopDetection = (list) => {
    //pointer
    let current = list.head;
    //loop to traverse the list
    while(current.next){
        current = current.next;
        //if flag 1 is found then loop is there
        if(current.flag == 1) return true;
        //assigning flag = 1 for traversed node
        current.flag = 1;
    }
    return false;
}
try{
    //list with loop
    const createfirstList = new singleLinkedList();
    createfirstList.unshift(5);
    createfirstList.unshift(4);
    createfirstList.unshift(3);
    createfirstList.unshift(2);
    createfirstList.unshift(1);
    createfirstList.unshift(1);
    createfirstList.unshift(1);
    createfirstList.unshift(1);
    createfirstList.log
    const loopedList = createLoop(createfirstList);
    const detectLoop = loopDetection(createfirstList);
    console.log(detectLoop)
    //list without loop
    const createsecondList = new singleLinkedList();
    createsecondList.unshift(5);
    createsecondList.unshift(4);
    createsecondList.unshift(3);
    createsecondList.unshift(2);
    createsecondList.unshift(1);
    createsecondList.unshift(6);
    createsecondList.unshift(1);
    createsecondList.unshift(4);
    createsecondList.log
    const detectLoop2 = loopDetection(createsecondList);
    console.log(detectLoop2)
}catch(e){console.warn(e)}