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
