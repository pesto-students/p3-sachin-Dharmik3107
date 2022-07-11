//! ES5 Based Inheritance using function

function Person(name) {
  this.name = name;
}
Person.prototype.printname = function () {
  console.log(this.name);
};
function Teacher(name, Subject) {
  Person.call(this, name);
  this.Subject = Subject;
}

Teacher.prototype.Teach = function () {
  console.log(this.name + " is now Teaching " + this.Subject);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const Teachers = new Teacher("Suresh", "Chemistry");
Teachers.Teach();
Teachers.printname();
