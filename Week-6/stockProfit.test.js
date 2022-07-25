const stockFunction = require('./stockProfit')
describe('test to check stock profit analyzer funtion',()=>{
    const stockValue = [3, 1, 5, 10, 13, 22, 4];
    const getProfit = stockFunction(stockValue);
    test('should return number in output', () => {
      expect(typeof getProfit).toBe('number')
    })
    test('should return 21 in output', () => {
        expect(getProfit).toBe(21)
      })
})