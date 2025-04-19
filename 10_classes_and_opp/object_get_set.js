const User = {
    _email: "elephant.com",
    _password: "elephant",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

const huru = Object.create(User)
console.log(huru.email)
