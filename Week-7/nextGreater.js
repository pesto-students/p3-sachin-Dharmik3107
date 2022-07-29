//calling custom stack to use it as auxiliary space
const MyStack = require("./customStack");
//function to find and replace element by next greater
function nextGreater(array) {
    //creating stack
  let stack = new MyStack();
  //necessary input checks
  if (typeof array !== "object") throw "Invalind Input";
  for (let element of array) {
    if (!Number.isInteger(element)) throw "Invalind Array";
  }
  //variable declaration
  let peekValue;
  let result = [];
  let n = array.length - 1;
  //loop for find next greater
  for (let iIndex = n; iIndex >= 0; iIndex--) {
      while (stack.size !== 0 && stack.peek() >= array[iIndex]) {
          peekValue = stack.peek();
          stack.pop();
    }
    //ternary condition to add -1 or greater value 
    result[iIndex] = stack.size == 0 ? -1 : peekValue;
    stack.push(array[iIndex]);
  }
  return result
}
const randomArray = [1, 3, 2, 4];
const getGreater = nextGreater(randomArray);
console.log(getGreater);
