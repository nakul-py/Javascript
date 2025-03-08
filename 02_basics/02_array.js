const cartoon_channels = ['pogo', 'cartoon network', 'disney'];
const music_channels = ['mtv', 'vh1', '9xm'];

// channels.push(music_channels);
// console.log(cartoon_channels);

// console.log(cartoon_channels[3][1]); // not a good way to access the elements

// concat method : it will not change the original array and return a new array with the elements of both the arrays.

// 1st way

// cartoon_channels.concat(music_channels);
// console.log(cartoon_channels.concat(music_channels));

// 2nd way

const all_channels = cartoon_channels.concat(music_channels);
// console.log(all_channels);

// 3rd way

const all_new_channels = [...cartoon_channels, ...music_channels];
// console.log(all_new_channels);

const new_array = [1, 2, 4, [5, 6, 7], 8, 9, [10, 11, 12, [13, 14, 15]]];
const real_new_array = new_array.flat(Infinity);
// console.log(real_new_array);

// console.log(Array.isArray("abcd")); 
// console.log(Array.from("abcd"));
// console.log(Array.isArray(Array.from("abcd")));

// console.log(Array.from({name: "apple"}));  // intresting

let num1 = 100
let num2 = 200
let num3 = 300
let num4 = 400

console.log(Array.of(num1, num2, num3, num4));  // Array.of
console.log(Array.of(...[num1, num2, num3, num4]));  // spread operator
console.log(num1 + num2 + num3 + num4);  // normal addition
