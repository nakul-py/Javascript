// array

const myArray = [0, 1, 2, 3, 4, 5];
// console.log(myArray);
// console.log(myArray[0]);

const myGreeting = ['Hello', 'World'];
// console.log(myGreeting);
// console.log(myGreeting[1]);

const myMixedArray = [1, 'Hello', 3.14, true];
// console.log(myMixedArray);
// console.log(myMixedArray[3]);

const myNestedArray = [[1, 2], [3, 4], [5, 6]];
// console.log(myNestedArray);
// console.log(myNestedArray[1]);
// console.log(myNestedArray[1][0]);

// Array methods

myArray.push(6);
// console.log(myArray);
myArray.pop();
// console.log(myArray);
myArray.unshift(8);
// console.log(myArray);
myArray.shift();
// console.log(myArray);

const myEmptyArray = [];
// console.log(myEmptyArray);
myEmptyArray.push('Hello');
// console.log(myEmptyArray);
myEmptyArray.push('World');
// console.log(myEmptyArray);
myEmptyArray.pop();
// console.log(myEmptyArray);
myEmptyArray.unshift('World');      


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();
// console.log(newArray);


// splice, slice

// console.log('A',myArray);

const myn1 = myArray.slice(1, 3);

// console.log(myn1);
// console.log('B',myArray);

const myn2 = myArray.splice(1, 3);

// console.log(myn2);
// console.log('C',myArray);


