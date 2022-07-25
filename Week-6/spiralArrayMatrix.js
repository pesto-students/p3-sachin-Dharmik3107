//arrange element of matrix in array in spiral manner.For ex. [[1,2,3],[4,5,6],[7,8,9]] --> [1,2,3,6,9,8,7,4,5]
//matrix position chart:[[00,01,02],[10,11,12],[20,21,22]]
//input matrix chart:   [[1,2,3],[4,5,6],[7,8,9]]
const matrixArray = [[1,2,3],[4,5,6],[7,8,9]];
//function to create 
function spiralMatrix(matrix){
    let topRow = 0;
    let leftColumn = 0;
    let rowEnd = matrix.length-1;
    let columnEnd = matrix.length-1;
    let sortedArray = [];
    //to check condtion that all elements of matrix is executed or not
    while(leftColumn<=columnEnd && topRow<=rowEnd){
        // console.log(`top:${topRow},right:${columnEnd},bottom:${rowEnd},left:${leftColumn}`) //for debugging
        //right direction
        for(let iIndex = leftColumn;iIndex <= columnEnd; iIndex++){
            sortedArray.push(matrix[topRow][iIndex]);
            // console.log(sortedArray);
        }
        topRow++;
        // console.log(`top:${topRow},right:${columnEnd},bottom:${rowEnd},left:${leftColumn}`) //for debugging
        //down direction
        for(let iIndex= topRow; iIndex <= rowEnd; iIndex++){
            sortedArray.push(matrix[iIndex][columnEnd]);
            // console.log(sortedArray);
        }
        columnEnd--;
        // console.log(`top:${topRow},right:${columnEnd},bottom:${rowEnd},left:${leftColumn}`) //for debugging
        //left direction
        for(let iIndex = columnEnd; iIndex>=leftColumn; iIndex--){
            sortedArray.push(matrix[rowEnd][iIndex]);
            // console.log(sortedArray,rowEnd,iIndex);
        }
        rowEnd--;
        // console.log(`top:${topRow},right:${columnEnd},bottom:${rowEnd},left:${leftColumn}`) //for debugging
        //up direction
        for(let iIndex = rowEnd; iIndex >= topRow; iIndex--){
            sortedArray.push(matrix[iIndex][leftColumn]);
            // console.log(sortedArray);
        }
        leftColumn++;
        // console.log(`top:${topRow},right:${columnEnd},bottom:${rowEnd},left:${leftColumn}`) //for debugging
    }
    return sortedArray;
}
let getSpiraledArray = spiralMatrix(matrixArray);
console.log(getSpiraledArray)

module.exports = (spiralMatrix)