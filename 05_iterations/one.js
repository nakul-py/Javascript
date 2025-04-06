// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("Found 5");
        //// break;
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop table: ${i}`);
    for (let a = 1; a <= 10; a++) {
        // console.log(`Inner loop: ${a} and inner loop ${i}`);
        // console.log (i + " * " + a + " = " + i * a);
    }
}

let myArray = ['Deadpool', 'superman', 'batman', 'spiderman'];
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}



// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
//         console.log("Found 5");
        break;
    }
// console.log(`value of i: ${i}`);    
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
//         console.log("Found 5");
        continue
    }
// console.log(`value of i: ${i}`);    
}