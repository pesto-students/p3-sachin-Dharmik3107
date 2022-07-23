//Make a code which sort array which contain only 0's,1's and 2's in ascending order:for ex. [0,1,2,0,2,1] --> [0,0,1,1,2,2] 
const inputArray = [0,1,0,2,0,1,0,2,1];
//function to sort array
function arraySorting(array){
    let sortedArray = []; 
    let zeroPointer = 0; //Pointer after last zero
    let firstPointer = 0; //Pointe after last one
    const n = array.length;
    //condition for array validation
    if(!Array.isArray(array)) throw 'Invalid Input';
    //condition for element validation
    for(let element of array){
        if(element > 2 || element < 0 || !typeof element === 'number') throw 'Invalid Array';  
    }
    //sorting for loop condition
    for(let iIndex = 0; iIndex <= n; iIndex ++){
        //if element is Zero add it in starting and make zero pointer +1 when if condition executed
        if(array[iIndex]===0){
            sortedArray.unshift(array[iIndex]);
            zeroPointer ++;
        }
        //if element is Zero add it in starting and make zero pointer +1 & first pointer at the position of last 1's when if condition executed
        if(array[iIndex]===1){
            sortedArray.splice(zeroPointer,0,array[iIndex])
            zeroPointer += 1;
            firstPointer = zeroPointer + 1;
        }
        //add 2's after last 1's
        if(array[iIndex]===2) sortedArray.splice(firstPointer,0,array[iIndex]);
    }
    return sortedArray;
}

const getSortedArray =arraySorting(inputArray);
console.log(`Sorted array: [${getSortedArray}]`);

module.exports = (arraySorting);

/*
Time Complecity = O(n): Reason--> for loop doesnt contain n inside loop it is just used to decide the upper boundry of loop so if code inside
loop will take k2 sec of time then it will run n time so total time of loop will be k2n. the variable declaration and checking contion can be 
counted as constant so assuming that it will take k1 time to complete execution. So total time will be near about k1+k2*n --> O(n) 
2.In loop there are 12 constants so k2 = 12 and k1 will be 11 so Time complexity will be O(n)= 11+12n 
*/