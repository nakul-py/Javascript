// scopes are the context in which a variable is declared. They are used to determine the visibility and lifetime of a variable.

if (true) {
  let a = 10; // block scope
  const b = 20; // block scope
  console.log("number:",a);
}

let a = 104; // global scope
console.log(a); // 104
