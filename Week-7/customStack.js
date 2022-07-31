class CustomStack{
    constructor(){
        //variable declaration
        this.items = [];
        this.pointer = -1;
        this.maxSize = 50;
    }
    get size(){
        //should return size of array
        return this.items.length;
    }
    push(item){
        // add number at the last index and does not return anything
        //condition for overflow
        if(this.items.length === this.maxSize) throw 'Stack Overflow';
        this.items.push(item);
        this.pointer = item;
    }
    pop(){
        //should remove an element from last index and return that removed element
        //condition for underflow
        if(this.items.size === 0) throw 'Stack Underflow'
        let popItem = this.items.pop();
        this.pointer = this.items[this.size - 2];
        return popItem;
    }
    peek(){
        //should return last element of array
        //condition for empty array
        if(this.size === 0) throw 'Stack is Empty';
        return this.pointer
    }
    log(){
        //print array/stack
        return this.items;
    }
}

module.exports = (CustomStack);