// Dates

let myDate = new Date()
// console.log(`1`,myDate.toString())
// console.log(`2`,myDate.toUTCString())
// console.log(`3`,myDate.toDateString())
// console.log(`4`,myDate.toISOString())
// console.log(`5`,myDate.toJSON())
// console.log(`6`,myDate.toLocaleString())
// console.log(`7`,myDate.toLocaleDateString())
// console.log(`8`,myDate.toLocaleTimeString())
// console.log(`9`,myDate.toTimeString())
// console.log(`10`,myDate.getTimezoneOffset())
// console.log(typeof myDate)

let myCurrentDate = new Date(2025, 2, 7)
// let myCurrentDate = new Date(2025, 2, 7)
// let myCurrentDate = new Date("2025-03-7")   // YY/MM/DD
// let myCurrentDate = new Date("03-7-2025")   // DD/MM/YY


// console.log(myCurrentDate.toDateString())
// console.log(myCurrentDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCurrentDate.getTime());
// console.log(myCurrentDate.getDate());
// console.log(Math.floor(Date.now()/10000000000));

let newDate = new Date(2025, 2, 7, 10, 30, 45, 0)
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

// console.log(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`)

console.log(newDate.toLocaleString('default', { month: 'long' }))
console.log(newDate.toLocaleString('default', { weekday: 'long' }))