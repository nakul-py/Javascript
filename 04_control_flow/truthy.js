const userEmail = [];

// if (userEmail) {
//   console.log("Email is present");
// }else {
//   console.log("Email is not present");
// }

// falsy values
// false, 0, "", null, undefined, NaN, -0, BigInt(0n)

// truthy values
// " ", "0", "false", [], {}, function(){}, -1, Infinity

 const thisArray = [0];
// if (thisArray.length === 0) {
//   console.log("Array is empty");
// }
// else {
//   console.log("Array is not empty");
// } 


const lolObj = {"a":1};

// if (Object.keys(lolObj).length === 0) {
//   console.log("Object is empty");
// }
// else {
//   console.log("Object is present");
// }

//__________________________________________________________________________________________________________________________________________________________________

// Nullish coalescing operator (??): null or undefined

let val1;
// val1 = 4 ?? 8;           // 4
// val1 = 0 ?? 8;          // 0
// val1 = "" ?? 8;         // ""
// val1 = null ?? 8;       // 8
// val1 = undefined ?? 55; // 55
val1 = null ?? 0 ?? 8; // 0
// val1 = 0 ?? null ?? 8; // 0

// console.log(val1);


// Ternary operator
// condition ? True : False

const blackTeaPrice = 100;

blackTeaPrice <= 100 ? console.log("Black tea is affordable") : console.log("Black tea is expensive");
