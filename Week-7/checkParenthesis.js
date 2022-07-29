//check balancing of paranthesis: Balanced : false && Not Balanced : True
const MyStack = require("./customStack");

function checkParanthesis(expression, inputValue) {
  if (typeof expression !== "string") throw "Invalid Input";
  let paranthesis = ["(", "{", "[", ")", "}", "]"];
  let checker = 0;
  let outputValue;
  for (let element of expression) {
    if (paranthesis.includes(element)) checker += 1;
    if (checker == 0) throw "Invalid String";
  }
  let stack = new MyStack();
  if (inputValue === "(") outputValue = ")";
  if (inputValue === "{") outputValue = "}";
  if (inputValue === "[") outputValue = "]";
  for (let element of expression) {
      if (element == outputValue) {
        let top = stack.pop();
        let counter = 1;
        while (stack.size !== 0) {
          let top = stack.pop();
          if (top == outputValue) counter += 1;
          if (top == inputValue) counter -= 1;
        }
        if (counter !== 0) return true;
      }else{
        stack.push(element);
      }
  }
  return false;
}
try{
    newString = "[(])";
    const getChecked1 = checkParanthesis(newString,'(');
    console.log(getChecked1)//false
    const getChecked2 = checkParanthesis(newString,'{');
    console.log(getChecked2)//false
    const getChecked3 = checkParanthesis(newString,'[');
    console.log(getChecked3)//false
    if(getChecked1 == false && getChecked2 == false && getChecked3 == false) console.log(false);
    else return console.log(true);
}catch(e){
    console.warn(e)
}