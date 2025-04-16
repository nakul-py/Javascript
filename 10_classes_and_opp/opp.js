const user = {
    username: "Nakul",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Username: ${this.username}, Login Count: ${this.loginCount}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());