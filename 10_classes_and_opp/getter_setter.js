class UserA{
    constructor(gmail, username){
        this.gmail = gmail,
        this.username = username
    }
    get gmail(){
        return this._gmail
    }
    set gmail(value){
        this._gmail = value.toUpperCase()
    }
    get username(){
        return this._username
    }
    set username(value){
        this._username = value.toUpperCase()
    }
}

const dododo = new UserA("aplle@gmail.com", "Apple")
console.log(dododo.username)
console.log(dododo.gmail)