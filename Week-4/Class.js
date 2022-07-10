//! ES6 Based Inheritance using Class

class Person {
    constructor(name) {
        this.name = name;
    }
    printName(){
        console.log(this.name)
    }
}
class Teacher extends Person{
    constructor(name,subject){
        super(name)
        this.subject = subject
    }
    teach(){
        return this.name + ' is now teaching ' +this.subject
    }
}
const teacher = new Teacher('Dharmik','Maths');
console.log(teacher.teach());
teacher.printName();
