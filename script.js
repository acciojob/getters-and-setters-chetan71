class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age (optional for this task, but useful for validation or display)
  get age() {
    return this._age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);  // Call the parent class constructor
  }

  // Method for studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);  // Call the parent class constructor
  }

  // Method for teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
