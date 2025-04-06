// if

// < , > , <= , >= , == , === , != , !== 

// const temperature = 30;

// if (temperature > 25) {
//     console.log("It's hot outside");
// }
// else if (temperature < 15) {
//     console.log("It's cold outside");
// }
// else {
//     console.log("It's a nice day");
// }

const score = 100;

// if (score >= 90) {
//     const grade = "A";
//     console.log(`Your grade is ${grade}`);
// }
// console.log(`Your grade is ${grade}`);


const balance = 1000;

// if (balance > 500) console.log("test");

// if (balance < 400) {
//     console.log("Balance is less than 400");
// } else if (balance < 600) {
//     console.log("Balance is less than 600");
// }
// else if (balance < 700) {
//     console.log("Balance is less than 700");
// }
// else {
//     console.log("Balance is greater than 800");
// }


const userLoggedIn = true;
const creditCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && creditCard && 2 == 3) {
    console.log("User is logged in and has a credit card");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is logged in from either email or Google");
}