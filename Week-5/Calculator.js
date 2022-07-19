const Calculator = {
    sum: function (firstNumber,secondNumber){
        return firstNumber + secondNumber;
    },
    multiply : function (firstNumber,secondNumber){
        return firstNumber*secondNumber;
    },
    difference: function(firstNumber,secondNumber){
        return firstNumber - secondNumber;
    },
    divided: function(firstNumber,secondNumber){
        return firstNumber/secondNumber
    }
}

module.exports = Calculator