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