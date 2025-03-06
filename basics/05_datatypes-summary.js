//// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, Bigint.

const score = 100
const scoreValue = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol(123)
const anotherId = Symbol(123)

//console.log(id === anotherId);

const bigNumber = 123456789123456789n

//// Referance (Non primitive)

// Arrays, Objects, Functions

const channels = ["pogo", "cn", "hungama"];
let myObj = {
    name: "nakul",
    age: 1
}

const myFunction = function(){
    console.log("myFunction")
}

//console.log(myFunction);
//console.log(typeof bigNumber);
//console.log(typeof null);
//console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory

// Stack (Primitive),  Heap (Non primitive)
/*
let myName = "Nakul"

let anotherName = myName
anotherName = "Apple"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "abc@google.com",
    upi: "usr@abc"
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);  */
