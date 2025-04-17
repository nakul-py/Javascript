// let myName = "Nakul   "
// let fruit = "      Apple"

// console.log(myName.length)
// console.log(myName.trueLength)


let myHeros = ["thor", "hulk",]

let heroPowers = {
    thor: "thunder",
    hulk: "smash",

    getThunder: function () {
        console.log(`Thunder is the power of ${this.thor}`)
    }
}

Object.prototype.nakul = function () {
    console.log("Nakul is present in all objects")
}

Array.prototype.ipl = function () {
    console.log("ipl is present in all arrays")
}

// heroPowers.nakul()
// myHeros.nakul()
// myHeros.ipl()


// inheritance


const User = {
    name: "ciao",
    email: "ciao@googlr.comm"
}

const Teacher = {
    makevideo : true
}

const TeachingStaff = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : true,
    fullTime : true,
    __proto__: TeachingStaff
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(Teacher, TeachingStaff)

let bigUserName = "    Haha"

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length of username is ${this.trim().length}`)
}

bigUserName.trueLength()

"Nakul Verma".trueLength()
" B ".trueLength()