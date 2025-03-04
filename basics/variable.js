const accountId = 23580
let accountEmail = "nakulpy@gmail.com"
var accountPassword = "1243"
accountCity = "Jaipur"
let accountState;

//accountId = 1111   //  not allowed because it is defined as constant.

accountEmail = "nakul@gmail.com"
accountPassword = "2222"
accountCity = "Delhi"

/*
 Prefer not to use var
 because of issue iin block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])