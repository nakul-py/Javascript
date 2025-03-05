let score = false

/*console.log(typeof score)
console.log(typeof (score))*/

let valueInNumber = Number(score)
/*console.log(typeof valueInNumber);
console.log(valueInNumber);*/

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "apple"

let booleanIsLoggedIn = Boolean(isLoggedIn);
/*console.log(booleanIsLoggedIn);*/

// 1 => true; 2 => false
// "" => false
// "apple" => true

let AnNumber = "22"

let stringNumber = String(AnNumber)
/*console.log(stringNumber)
console.log( typeof stringNumber)*/

// ******************************* Operations ***************************************

let value = 3
let negValue = -value
//console.log(negValue)


let num1, num2, num3
num1 = num2 = num3 = 2 + 2
/*                 PRE-FIX OR POST-FIX                */
let gameCounter = 100
++gameCounter;
//console.log(gameCounter);

let x = 3
const y = x++;

console.log(`x:${x}, y:${y}`)
// ecpected output = x:4, y:3

let a = 3
const b = ++a;

console.log(`a:${a}, b:${b}`)
// ecpected output = a:4, b:4
