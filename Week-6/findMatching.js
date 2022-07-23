//code to find if there exists a pair of elements in the array whose difference is given integer.Return1 if any such pair exists else return 0.
const elementArray = [-2, 1, 5, -10, 3, 12, -4];
function MatchDifference(array, matchNumber) {
  let n = array.length - 1;
  let Difference = 0;
  //input validation
  if (!Array.isArray(array)) throw "Invalid Input";
  //array element validation
  for (let element of array) {
    if (!typeof element === "number")
      throw "Invalid Array, Array should contains only number";
  }
  //match number validation
  if (!typeof matchNumber === "number") throw "Invalid Match Number";
  //loop to find differences
  for (let iIndex = n; iIndex >= 0; iIndex--) {
    for (let jIndex = n; jIndex >= iIndex + 1; jIndex--) {
      Difference = array[jIndex] - array[iIndex];
      //condition to compare match number and difference between two numbers
      if (Difference === matchNumber || Difference === -matchNumber) return 1;
    }
  }
  return 0;
}
//invoking function
let getMatchingDifference = MatchDifference(elementArray, 30);
console.log(getMatchingDifference);

module.exports = (MatchDifference)

/*
Time complexity O(n*n) --> k1 + k2(n*n)
*/