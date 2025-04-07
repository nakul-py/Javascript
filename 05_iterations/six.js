const coding = ["js", "html", "css"];

// const values = coding.forEach( (item) => {
//     console.log(item);
// });

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (nums) => {
    return nums > 4})

// console.log(newNums)


const books = [
    { title: "Book 1", author: "Author 1", year: 2000,
        edition: 3 },
    { title: "Book 2", author: "Author 2", year: 2005, 
        edition: 2 },
    { title: "Book 3", author: "Author 3", year: 2010, 
        edition: 3 },
    { title: "Book 4", author: "Author 4", year: 2015, 
        edition: 3 },
    { title: "Book 5", author: "Author 5", year: 2020, 
        edition: 2 },
];

let newBooks = books.filter( (book) => book.edition === 2);


newBooks = books.filter( (book) => {
    return book.year >= 2010 && book.edition === 3;
}
);
console.log(newBooks);