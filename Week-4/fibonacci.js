const fibonacci ={
    [Symbol.iterator](){
        let n1 = 0, n2 = 1, number;
        return {
            next(){
                [value,n1,n2]=[n1,n2,n1+n2];
                return {value};
            }
        }
    }
}
for(const num of fibonacci){
    if(num > 10)
    break;
    console.log(num)
}