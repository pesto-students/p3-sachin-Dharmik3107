function createStack(){
    let items = [];
    function push(item){
        items.push(item);
    }
    function pop(){
        return items.pop();
    }

    return Object.freeze({
        push,
        pop
    });
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items;
stack.items = [10,100, 1000];
console.log(stack.items)