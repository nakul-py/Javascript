function multiplyBy10(num){
    return num * 10;
}

multiplyBy10.power = 0;
console.log(multiplyBy10(5));
console.log(multiplyBy10.prototype);
console.log(multiplyBy10.power);

function createUser(myname, age){
        this.myname = myname,
        this.age = age
};

createUser.prototype.increment = function(){
    this.age++;
}

createUser.prototype.getAge = function(){
    console.log(`Age is ${this.age}`);
}
const wow = new createUser("aplle", 20)
const yay = new createUser("banana", 30)

wow.getAge();
yay.getAge();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/