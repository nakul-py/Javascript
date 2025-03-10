// singleton object: object with only one instance
// object literal: object with key-value pairs
// object constructor: object with properties and methods

// singleton object
// const singleton = {
//   name: 'singleton',
//   age: 1,
//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// };          
// singleton.greet(); // Hello, I'm singleton

// object literal

const mySymbol = Symbol('apple');

const person = {
  name: 'Nakul',
  age: 20,
  [mySymbol]: 'apple', // this is how we can define a symbol as a key in an object
  location: 'India',
  email: 'nakul@gmail.com',
  isLoggedIn: false,
  lastLogInDay: 'Monday',
   greet() {
     console.log(`Hello, I'm ${this.name}`);
   }
};  
person.greet();

console.log(person.name);
console.log(person.age);
console.log(person.location);
console.log(person['email']); // this is how we access properties with special characters
console.log(person[mySymbol]); // this is how we can define a symbol as a key in an object
console.log(typeof person[mySymbol]);


person.lct = function() {
    console.log(`I'am from , ${this.location}`);
}
person.lct();

// console.log(person);
person.email = 'nakulverma@gmail.com';
// console.log(person);
Object.freeze(person); // this will make the object immutable
person.email = 'n@gmail.com';
console.log(person);

