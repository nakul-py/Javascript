// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nakul"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        firstName: "Nakul",
        lastName: "Verma"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstName);
// console.log(regularUser.fullname.lastName);

const obj1 = {1: 'one', 2: 'two', 3: 'three'};
const obj2 = {4: 'four', 5: 'five', 6: 'six'};

// const obj3 = Object.assign(obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('ids'));