// function sayMyName() {
//   console.log("N"),
//   console.log("A")
//   console.log("K")
//   console.log("U")
//   console.log("L")
// }

// sayMyName()

// function addThreeNumbers(number1, number2, number3) {
//   console.log(number1 + number2 + number3)
// }       

// addThreeNumbers(1, 2, 3)

// function addThreeNumbers(number1, number2, number3) {
//     return number1 + number2 + number3

// }                   

function addThreeNumbers(number1, number2, number3) {
       let result = number1 + number2 + number3
       return result
}                   
    
const result = addThreeNumbers(1, 2, 3)
// console.log("RESULT:",result)

//____________________________________________________________________________________________________________________________________________________________________________________

function loginUserMsg (username) {
    if (username === undefined) {
        return "Please provide a username"
    }
    return `Welcome to the site ${username}`
}

// console.log(loginUserMsg("Nakul"))

