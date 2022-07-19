function hasDuplicate(array) {
    const set = new Set();

    for(let i of array){
        const value = array[i];
        if(set.has(value)){
            return true;
        }
        set.add(value);
    }
    return false;
}

console.log(hasDuplicate([1,2,3,4]));
