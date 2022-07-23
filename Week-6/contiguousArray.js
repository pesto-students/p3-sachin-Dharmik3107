//function to find max sum of subarray
function contiguousArray(array, windowSize) {
    //Condition to check input array is Array
  if (!Array.isArray(array)) throw "Invalid Array";
    //Condition to check element of array is an integer
  for(let iIndex=0;iIndex<=array.length-1;iIndex++){
    if(!Number.isInteger(array[iIndex])) throw 'Invalid element of Array'
  }
    //Condition to validate window size
  if(!Number.isInteger(windowSize) || windowSize === 0) throw "Invalid size of subarray"
    //Starting from negative infinity because sum should be negative also
  globalSum = Number.NEGATIVE_INFINITY;
  currentSum = 0;
  let N = array.length
  //Condition for first Window of subarray
  for(let jIndex = 0; jIndex<=windowSize; jIndex++){
    currentSum += array[jIndex];
    if(currentSum>globalSum) globalSum = currentSum;
    if(currentSum < 0) currentSum = 0;;
  }
  //Condition  to move window to next element
  for(let zIndex = windowSize; zIndex<N; zIndex++){
      currentSum = currentSum - array[zIndex-windowSize]+array[zIndex];
      globalSum = Math.max(currentSum,globalSum);
    }
    return globalSum
}
//function to check for all size window and find the max out of it
function changeWindow(array){
    let ListSubarraySum = {}
    let N = array.length
    //Condition to apply all possible size of window based on length of array
    for(let nIndex = 1; nIndex <= N; nIndex++){
        let getSum = contiguousArray(array,nIndex);
        ListSubarraySum[nIndex] = getSum;
    }
    //to find max creating array and finding index 
    let sumArray = Object.values(ListSubarraySum);
    let maxIndex = sumArray.indexOf(Math.max(...sumArray))
    return `Maximun sum of size of subarray ${maxIndex+1} is ${ListSubarraySum[maxIndex+1]}`
}
let newArray = [1,-2,5,-6,2,9,-4,7,12,-10,5]
const getMaxSum = changeWindow(newArray);
console.log(getMaxSum);

module.exports = {contiguousArray,changeWindow}

/*
Time complexity O(n*n)-->k1 + k2 + k3(n*n)
*/