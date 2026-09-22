const accountId = 123456789;//cannot be changed
let accountEmail = "user@example.com";//can be changed
var accountPassword = "securepassword123"; //can be changed
accountcity="jaipur";//bina var ya let ke declare kiya hai to ye global variable ban gya hai and can be changed



let accountState;//agr js ke andar kuch variable declare kiya hai but usko value assign nahi kiya hai to wo undefined hoga.



accountId = 987654321; // This will throw an error because accountId is a constant and cannot be reassigned

accountEmail = "newemail@example.com"; // This will work because accountEmail is a let variable and can be reassigned


console.table({ accountId, accountEmail, accountPassword, accountcity }); // This will log the variables in a table format individually krne ki jrurat nahi hai agr table use krr rhe hai

//let aur var dono me changes ho skte hai but let is block scoped and var is function scoped.so prefer not to use var in modern JavaScript.