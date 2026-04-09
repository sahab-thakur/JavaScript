const accountId= 869662
let accountEmail = "Sahab@gmail.com"

var accountPassword = "12345"
accountCity = "Banglore"


//accountId = 2 //not allowed because accountId is a constant

accountEmail = "SahabSinghThakur@gmail.com"
accountPassword = "Sahab"
accountCity = "Damoh"

console.log(accountId);


/*
  prefer not to use var
  because of issue in block scope and functional scope
*/


console.log([accountEmail, accountPassword, accountCity, accountId]);
console.table([accountEmail, accountPassword, accountCity, accountId]);



