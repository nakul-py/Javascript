// scopes are the context in which a variable is declared. They are used to determine the visibility and lifetime of a variable.

if (true) {
  let a = 10; // block scope
  const b = 20; // block scope
  // console.log("number:",a);
}

let a = 104; // global scope
// console.log(a); // 104


function one () {
  const username = "nakul";

  function two () {
    const appname = "myapp";
    console.log(username);
  }
  // console.log(appname);
  two();
}
// one();

if(true) {
  const username = "apple";
  if (username === "apple") {
    const appname = "youtube";
    // console.log(username + " " + appname);
  }
  // console.log(appname);  // ReferenceError: appname is not defined
}
// console.log(username);   // ReferenceError: username is not defined

// ++++++++++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++

function addone (num) {
  return num + 1;
}

console.log(addone(10));

// addtwo(10); // ReferenceError: Cannot access 'addtwo' before initialization

const addtwo = function (num) { 
  return num + 2; 
} 

console.log(addtwo(10));