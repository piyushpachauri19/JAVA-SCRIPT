//  Primitive

//  7 types : String, Number, Boollen, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')//unique value hota hai so dono ko compare krne pe bhi result joh hai woh false hi hoga

const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//++++++++++++++++++++++++++++++++++++++++
//memory

//stack (primitive type me use hoota hai)so copy jata hai ,   heap(non-primitive type)actual ya refernce jata hai

let myyoutubename="piyushpachauri"

let anothername=myyoutubename;
anothername="hackandjack";

console.log(myyoutubename);
console.log(anothername);

//**************//

let userone = {
    email: "user@google.com",
    upi: "userrr@uihvu"
}

let usertwo =userone;

usertwo.email="playwithcode"

console.log(userone);
console.log(usertwo);