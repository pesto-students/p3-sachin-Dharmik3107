console.log('Code for Bind')

let object1 = {
    name:'Dharmik',
    age: 19,
    votability:function(){
        if (this.age >18){
           return console.log(this.name + ' is eligible for voting');
        }
        return console.log(this.name + ' is not eligible for voting')
        }
}

let newEntry = {
    name:'Patel',
    age: 17
}
object1.votability();
const obj2 = object1.votability.bind(newEntry);

obj2();

////////////////////////////////


console.log('Code for Call')
a = 10;
b = 20;
c = 5;
d = 25;

function multiAdd(){
    return (this.a + this.b)*(this.c + this.d)
}

let fn = multiAdd();
console.log(fn);

let fn2 = multiAdd.call({a:5, b:5, c:2, d:8})
console.log(fn2)


////////////////////////////////


console.log('Code for Apply')
const details = {
    name:'Ganesh',
    age: 21,
    location:function(city, state){
        return console.log(this.name + ' is living at ' + city +', '+ state + ' and she/he is '+ this.age + ' years old.')
    }
}

const person2 = {
    name:'Suresh',
    age: 24
}

let print = details.location('Surat', 'Gujarat');
let print2 = details.location.apply(person2,['ahmedabad', 'Gujarat'])