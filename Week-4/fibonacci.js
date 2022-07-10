const fibonacci ={
    [Symbol.iterator](){
        let firstNumber = 0, secondNumber = 1, number;
        return {
            next(){
                [value,firstNumber,secondNumber]=[firstNumber,secondNumber,firstNumber+secondNumber];
                return {value};
            }
        }
    }
}
for(const num of fibonacci){
    if(num > 10)break;
    console.log(num)
}
