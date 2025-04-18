// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

const tata = {
    name: "chai",
    price: 100,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(tata, 'name'));

Object.defineProperty(tata, 'name', {
    // writable: false,
    // enumerable: false,
    // configurable: false
});
console.log(Object.getOwnPropertyDescriptor(tata, 'name'));

tata.name = "newChai"; // This will not change the name property because writable is set to false
console.log(tata.name);


for (let [key, value] of Object.entries(tata)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }    
}