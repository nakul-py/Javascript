const name = "Nakul"
const anyNumber = 29

// console.log(name + " " + anyNumber);
/*
console.log(`Hello my name is ${name} and random number is ${anyNumber}`);

const gameName = new String('brawlstars')

console.log(gameName)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.indexOf('t'))
console.log(gameName.charAt(4))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

 // trim
const newStringOne =  "   bababa   "
console.log(newStringOne);
console.log(newStringOne.trim()); 

// trimStart
const channel = "   pogo   ";

console.log(channel);
console.log(channel.trimStart());

// trimEnd
const fruit = "   pineapple   ";

console.log(fruit);
console.log(fruit.trimEnd()); 
*/

// replace

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript "

console.log(url.replace(' ',''))

// includes
console.log(url.includes('Java'))

// split 

const str = "A repo which is full of code of Javascript";

const words = str.split(" ");
console.log(words[3]);

const chars = str.split("");
console.log(chars[8]);

const strCopy = str.split();
console.log(strCopy);

// repeat
const mood = "YaY! ";

console.log(`I feel ${mood.repeat(3)}`);

// valueof 
const stringObj = new String("foo");

console.log(stringObj);
console.log(stringObj.valueOf());
