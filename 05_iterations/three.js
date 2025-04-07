// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = ["a", "b", "c"];

for (const val of arr) {
//   console.log(val);
}

const greeting = "Hello world!";
let num = 0;
for (const greet of greeting) {
    num++;
    // console.log(`Alphabet ${num} = ${greet}`);
}


// Maps

const map = new Map()
map.set('In', 'India')
map.set('Us', 'United States')
map.set('Au', 'Australia')

// console.log(map);

for (const [i, j] of map) {
    // console.log(i ,"-->", j);
}


const myobj = {
    'player1': 'Dhoni',
    'player3': 'Kohli',
}

for (const [key , value] of myobj) {
   console.log(key, '=',value);
}

for (const [key, value] of Object.entries(myobj)) {
//     console.log(key, "=" ,value);
}