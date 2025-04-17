function setUsername(username){
    // complex DB call
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this ,username)

    this.email = email
    this.password = password
}

const useer = new createUser("ciao", "ciao@gmail.com", "ciao123")
console.log(useer)