const accountId = 144553
let accountEmail = "punit@google.com"
var accountPassword = "12345"
/*
prefer not to use var
because it has a issue in block scope and functional scope 
*/
accountCity = "Jaipur"
let accountState;


// accountId = 2 // not allowed
accountEmail = "yas@google.com"
accountPassword = "67890"
accountCity = "Hyderabad"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])



