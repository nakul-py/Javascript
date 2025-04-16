const promiseOne = new Promise(function(resolve, reject){
// Do an async task
setTimeout(function(){
    console.log('Async task is complete.................................');
    resolve()
}, 1000)
});

promiseOne.then(function() {
    console.log("promiseOne consumed")
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
});

promiseTwo.then(function() {
    console.log("promiseTwo consumed")
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "abcd@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Nakul", password: "123456"})
        } else{
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return {username: user.username ,password: user.password}
}).then(({username, password}) => {
    console.log(username)
    console.log(password)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "1256"})
        } else{
            reject("Error: Program is wrong...")
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const response =  await promiseFive
    console.log(response.username);
    console.log(response.password);
    return response
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()


// async function getAllUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);
// }

// getAllUsers()


// ----------------------------------------------------------------------------------------------


// async function getUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//         return data
//     } catch (error) {
//         console.log("Er: ",error);
//     }
// }

// getUsers()


// -------------------------------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    if(!response.ok){
        throw new Error("Network response was not ok")
    }
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: ", error);
})