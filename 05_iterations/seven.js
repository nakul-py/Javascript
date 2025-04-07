// chaining
// chaining is when you use multiple methods on the same array
// in a single line of code
// this is useful when you want to perform multiple operations on the same array

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = myNumbers.map((number) => number + 10)

const result = myNumbers
                .map((number) => number * 10)
                .map((number) => number + 1)
                .filter((number) => number < 75)
console.log(result);