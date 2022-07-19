function* numberMethods(firstNumber, secondNumber){
    function addNumbers(){
        let sum = firstNumber + secondNumber;
        return sum;
    }
    let getSum = yield addNumbers();
    function multiplyNumbers(){
        let multiplied = firstNumber*secondNumber;
        return multiplied;
    }
    let getMultiplied = yield multiplyNumbers();
    function getRemainder(){
        let remainder = firstNumber%secondNumber;
        return remainder;
    }
    let storedRemainder = yield getRemainder();
}
async function nextCaller(){
    try{
        const getCalculations = await numberMethods(50,10);
        console.log(getCalculations.next());
        console.log(getCalculations.next());
        console.log(getCalculations.next());
    }catch(error){
        console.log(error)
    }
}
nextCaller()