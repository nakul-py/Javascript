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

const promiseTwo = new Promise(function(resolve){
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