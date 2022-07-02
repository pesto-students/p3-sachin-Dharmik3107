function memoize(fun){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fun(...args));
        return cache.get(key);
    };
}
// let a = 0;
// let b = 0;
function reduce(a = 0,b = 0){
    return a+b;
}

function time(fun){
    console.time();
    fun();
    console.timeEnd();
}

const reduceMem = memoize(reduce);

time(() => reduceMem(100,200));
console.log(reduceMem(100,200));
time(() => reduceMem(100,200));
console.log(reduceMem(100,200));
time(() => reduceMem(100));
console.log(reduceMem(100));

