//! ES6 Based Inheritance using Class

class person {
    constructor(name) {
        this.name = name;
    }
    printName(){
        console.log(this.name)
    }
}
class Teacher extends person{
    constructor(name,subject){
        super(name)
        this.subject = subject
    }
    teach(){
        return console.log(this.name + ' is now teaching ' +this.subject)
    }
}
const teacher = new Teacher('Dharmik','Maths');
teacher.teach();
teacher.printName();




//! ES5 Based Inheritance using function

function PERSON(NAME){
    this.NAME = NAME;
}
PERSON.prototype.printname = function(){
    console.log(this.NAME)
}
function TEACHER(NAME,SUBJECT){
            PERSON.call(this, NAME);
            this.SUBECT = SUBJECT;
}

TEACHER.prototype.TEACH = function(){
    console.log(this.NAME + ' is now teaching ' +this.SUBECT)
}

Object.setPrototypeOf(TEACHER.prototype,PERSON.prototype)

const TeaCher = new TEACHER('Suresh','Chemistry');
TeaCher.TEACH();
TeaCher.printname();