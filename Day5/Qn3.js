class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
  }
}

// Create instances of the Person class
const person1 = new Person("Namo", 73, "India");

// Display details of person1
console.log(person1.displayDetails());
