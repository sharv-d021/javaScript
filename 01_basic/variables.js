const accountId = 144553
let accountEmail = "sharv@gmai.com"
var accountPass = "12345"
accountCity = "CSN"
let accountState;

// accountId = 2  //Already declared const ke wajah se override nahi hoga

/*
Prefer not to use var
Coz of issue in block scope and functional scope
*/

accountEmail = "sha@gmai.com"
accountPass = "125"
accountCity = "N"

console.log(accountId);
console.table([accountEmail, accountPass, accountCity, accountState])


