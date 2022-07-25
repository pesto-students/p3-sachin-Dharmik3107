//to find the nearest as per input
function nearestSum(array, nearSum) {
  let sumlist = [];
  const lowerLimit = nearSum-1;
  const upperLimit = nearSum+1;
  const windowSize = 3;
  let globalSum = 0;
  let currentSum = 0;
  let N = array.length;
  //Condition to check input array is Array
  if (!Array.isArray(array)) throw "Invalid Array";
  //Condition to check element of array is an integer
  for (let iIndex = 0; iIndex <= array.length - 1; iIndex++) {
    if (!Number.isInteger(array[iIndex])) throw "Invalid element of Array";
  }
  //Condition to validate window size
  if (!Number.isInteger(windowSize) || windowSize === 0) throw "Invalid size of subarray";
  //Condition for first Window of subarray
  for (let jIndex = 0; jIndex <= windowSize; jIndex++) {
    currentSum += array[jIndex];
    sumlist.push(currentSum);
    if (currentSum > globalSum) globalSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  //Condition  to move window to next element
  for (let zIndex = windowSize; zIndex < N; zIndex++) {
    currentSum = currentSum - array[zIndex - windowSize] + array[zIndex];
    sumlist.push(currentSum);
    globalSum = Math.max(currentSum, globalSum);
  }
  //condition to check neares sum
  for(let iIndex=0;iIndex<sumlist.length;iIndex++){
    //conditon to check exact value 
    if(sumlist[iIndex] === nearSum) return sumlist[iIndex];
    //condition to check near sum in range of minus 1 and plus 1
    else if(lowerLimit===sumlist[iIndex] || upperLimit===sumlist[iIndex]) return sumlist[iIndex];
  }
}
//input array
const inputArray = [1, -2, 5, -6, 2, 9, -4, 7, 12, -10, 5];
//invoking function
const getClosestSum = nearestSum(inputArray,9);
console.log(getClosestSum)

module.exports = (nearestSum)

/*
Time complexity O(n) --> k1 + k2*n
*/