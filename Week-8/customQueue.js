class MyQueue {
    constructor() {
        this.items = [];
        //   this.front = 0;
        this.back = -1;
        this.maxSize = 5;
    }

    // get the size of the queue
    get size() {
        return this.items.length;
    }

    get isEmpty() {
        return this.items.length === 0;
    }

    // add item to the back of the queue
    enqueue(item) {
        if (this.size === this.maxSize) {
            throw 'Queue Overflow';
        }
        this.items.push(item);
        this.back++;
    }

    // remove item from the front of the queue
    dequeue() {
        if (this.size === 0) {
            throw 'Queue Underflow';
        }
        const frontItem = this.items.shift();
        this.back--;
        return frontItem;
    }

    get isEmpty() {
        return this.items.length === 0;
    }

    logItems() {
        console.log(this.items);
    }
}

module.exports = MyQueue;