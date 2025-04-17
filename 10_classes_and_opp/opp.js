const user = {
    username: "Nakul",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Username: ${this.username}, Login Count: ${this.loginCount}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.grettings = function () {
        console.log(`Hello ${this.username}`);
    }
    return this;
}

const userOne = new User("Nakul", 4, true);
const userTwo = new User("js", 1, false);
console.log(userOne.constructor);
// console.log(userTwo);

const Car = function (name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}

const carOne = new Car("Koenigsegg", "Agera", 2015);
const carTwo = new Car("Bugatti", "Chiron", 2018);

console.log(carOne instanceof Car);
console.log(carOne instanceof Object);
