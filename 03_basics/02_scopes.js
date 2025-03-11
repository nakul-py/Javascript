// scopes is a way to define the visibility of variables in a program
// There are 3 types of scopes in JavaScript:
// 1. Global scope
// 2. Function scope
// 3. Block scope
//
// Global scope: A variable is in the global scope if it is declared outside of a function or block.
// Function scope: A variable is in the function scope if it is declared inside a function.
// Block scope: A variable is in the block scope if it is declared inside a block.
//
// The scope of a variable determines where the variable can be accessed in a program.
//____________________________________________________________________________________________________________________________________________________________________________________
//
// Global scope     
// A variable is in the global scope if it is declared outside of a function or block.
//
// Example:
let myname = "Nakul"
console.log(myname)

// In this example, the variable name is in the global scope because it is declared outside of a function or block.
//____________________________________________________________________________________________________________________________________________________________________________________
//
// Function scope

// A variable is in the function scope if it is declared inside a function.
//
// Example:
function sayMyName() {
  let name = "Nakul"
  console.log(name)
}
sayMyName()
//
// In this example, the variable name is in the function scope because it is declared inside the function sayMyName.
//____________________________________________________________________________________________________________________________________________________________________________________
//
// Block scope
// A variable is in the block scope if it is declared inside a block.
//
// Example:
if (true) {
  let name = "Nakul"
  console.log(name)  
}

// In this example, the variable name is in the block scope because it is declared inside the block { }.
//____________________________________________________________________________________________________________________________________________________________________________________
//
// Shadowing
// Shadowing occurs when a variable in a local scope has the same name as a variable in an outer scope.
//
// Example:
let name = "Nakul"
                                                                     
function sayMyName() {
  let name = "John"
  console.log(name)

}

sayMyName()
//
// In this example, the variable name in the function sayMyName shadows the variable name in the global scope.
//___________________________________________________________________________________________________________________________________________________________________________________