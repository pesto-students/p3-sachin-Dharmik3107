function createIncrement(){
    let count = 0;
    function increment(){
        count++;
        console.log(count);
    }
    let message =`Count is ${count}`
    function log(){
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
`for count in increment function has increment everytime we invoke increment function but in line 7 it prints only one time because we are invoking
createIncrement function one time`