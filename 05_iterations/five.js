const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

coding.forEach( function (item) {
    // console.log(item);
});

coding.forEach( (item) => {
    // console.log(item);
});

function printme(item) {
    // console.log(item);
}

coding.forEach(printme);


coding.forEach( (item, index, array) => {
    // console.log(index ,item ,array);
});


const myCoding = [
    {
        language: 'JavaScript',
        year: 1995,
        creator: 'Brendan Eich'
    },
    {
        language: 'Python', 
        year: 1991,
        creator: 'Guido van Rossum'
    },
    {
        language: 'C++', 
        year: 1979,
        creator: 'Bjarne Stroustrup'
    },
    {
        language: 'TypeScript', 
        year: 2012,
        creator: 'Anders Hejlsberg'
    },
]

myCoding.forEach((item) => {
    console.log(`Langusge = ${item.language},  Year = ${item.year},  Developer = ${item.creator}`);
})