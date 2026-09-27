console.log(2>1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
//ye toh normal hai but jab different data type me unpredictable result hota hai

console.log("2">1);//automatic 2 ko number maan leta hai but that unprdictable result hai

console.log(null>0);//false

console.log(undefined>0);//false


//so ham strict check use krte hai joh ki === se hota hai like ye direct compare nhi karega agr datatype different hai toh uss case me 