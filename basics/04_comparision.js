//  (Comparison check)

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);         ]
// console.log(null == 0);        |
// console.log(null >= 0);        |
//                                |-----> Avoid these types of comparison check
// console.log(undefined > 0);    |
// console.log(undefined == 0);   |
// console.log(undefined >= 0);   ]

// ===             (Strict check)

console.log("2" === 2);     //  Strictly check its Values and its Datatypes also.

