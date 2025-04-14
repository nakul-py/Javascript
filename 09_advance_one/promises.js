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

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
}).then(function() {
    console.log("promise consumed")
})