const moduleFile = require("./Calculator");
const addNumber = moduleFile.sum
const multipliedNumber = moduleFile.multiply
const differenceNumber = moduleFile.difference
const dividedNumber = moduleFile.divided
test('added Value is 15',()=>{
    let addedValue = addNumber(5,10);
    expect(addedValue).toBe(15)
})
test('multiplied Value is 20',()=>{
    let multipliedValue = multipliedNumber(4,5);
    expect(multipliedValue).toBe(20)
})
test('difference of Value is 28',()=>{
    let differenceValue = differenceNumber(30,2);
    expect(differenceValue).toBe(28)
})
test('divided Value is',()=>{
    let dividedValue = dividedNumber(70,10);
    expect(dividedValue).toBe(7)
})
