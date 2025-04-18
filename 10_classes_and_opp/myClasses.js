// ES6 

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const ciao = new User("chai", "chai@gmail.com", "1234");
// console.log(ciao);
console.log(ciao.encryptPassword());
console.log(ciao.changeUsername());


// Behind the scenes

function Users(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Users.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}
Users.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const tea = new Users("tea", "tea@gmail.com", "122234");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());