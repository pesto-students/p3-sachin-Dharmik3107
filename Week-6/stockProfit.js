//code to find best time to buy stock and sell stock by analysing the prices stored in array
//Stock Prices
const stockPrice = [3, 1, 5, 10, 13, 22, 4];
//function to find most profitable stock price differece
function stockPriceAnalyser(array) {
  let n = array.length - 1;
  let globalDifference = 0;
  let currentDifference = 0;
  let buyStock = Math.min(...array);
  let sellStock = Math.max(...array);
  //input validation
  if (!Array.isArray(array)) throw "Invalid Input";
  //array element validation
  for (let element of array) {
    if (element < 0) throw "Invalid Array, Stock price can not be in negative";
  }
  //loop to find differences
  for(let iIndex = n; iIndex>=0; iIndex--){
    for(let jIndex = n ; jIndex >= iIndex+1; jIndex--){
        currentDifference = array[jIndex]-array[iIndex] 
        if(currentDifference > globalDifference) globalDifference = currentDifference;
        if(currentDifference<0) currentDifference = 0;
    }
  }
  //outputs
  console.log(`Buy stock at: ${buyStock}`)
  console.log(`Sell stock at: ${sellStock}`)
  return globalDifference
}
//invoking the function
const profit = stockPriceAnalyser(stockPrice);
console.log('Your Profit will be:',profit);

module.exports = (stockPriceAnalyser)

/*
Time complexity : O(n*n) --> k1 + k2(n*n)
*/