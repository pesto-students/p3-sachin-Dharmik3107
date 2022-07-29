//check balancing of paranthesis: Balanced : false && Not Balanced : True
const MyStack = require("./customStack");
//function to check balanced paranthesis
function checkParanthesis(expression, inputValue) {
  //necessory input validation 
  if (typeof expression !== "string") throw "Invalid Input";
  let paranthesis = ["(", "{", "[", ")", "}", "]"];
  let checker = 0;
  let outputValue;
  for (let element of expression) {
    if (paranthesis.includes(element)) checker += 1;
    if (checker == 0) throw "Invalid String";
  }
  //creating a new stack
  let stack = new MyStack();
  //based on input value loop will run
  if (inputValue === "(") outputValue = ")";
  if (inputValue === "{") outputValue = "}";
  if (inputValue === "[") outputValue = "]";
  //loop to check paranthesis using counter
  for (let element of expression) {
      if (element == outputValue) {
        let top = stack.pop();
        //when output value found counter +1
        let counter = 1;
        while (stack.size !== 0) {
          let top = stack.pop();
          //when output value found counter +1
          if (top == outputValue) counter += 1;
          //when output value found counter -1 
          if (top == inputValue) counter -= 1;
        }
        //if counter = 0 then it is balanced
        if (counter !== 0) return true;
      }else{
        stack.push(element);
      }
  }
  return false;
}
try{
    newString = "[(])";
    //invoking function for '('
    const getChecked1 = checkParanthesis(newString,'(');
    //invoking function for '{'
    const getChecked2 = checkParanthesis(newString,'{');
    //invoking function for '['
    const getChecked3 = checkParanthesis(newString,'[');
    if(getChecked1 == false && getChecked2 == false && getChecked3 == false) console.log(false);
    else return console.log(true);
}catch(e){
    console.warn(e)
}
