let score="33abs";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber =Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

//33=33
//"33abs"=nan
//"true"=1/false=0
//undefined=nan
//null=0

let isloggedIn =1;

let booleanisloggedIn=Boolean(isloggedIn);

console.log(booleanisloggedIn);

//1=true/false=0;
//"piyush"=true;
//""=false;

let someNumber =33;

let stringsomeNumber=String(someNumber);

console.log(stringsomeNumber);
console.log(typeof stringsomeNumber);

//***************operations **************//

let value =3;
let negValue=-value;

console.log(negValue);


let str1="hello";
let str2="piyush";

let str3=str1+str2;

console.log(str3);

console.log("2"+1+1);//agar pehle string hai toh string me hi consider hoga =211
console.log(1+1+"2")//agr pehle number hai toh woh add hojayega uss ke baad string ke sth likha jayega =22
console.log(2+"1")//21
//but preffered hai sahi tarike se likho bracket use krke precendence ke accn

console.log("true")//true
console.log(+true)//1
//console.log(true+)//error

let gameCounter=100;
gameCounter++;//post fix
console.log("gameCounter");



