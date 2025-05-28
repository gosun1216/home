//Object
console.log("====== OBJECT ======");
const obj1 = new Object();
obj1.title = "어린왕자";
obj1.price = 3000;

const result = obj1 instanceof Object;
console.log(result);

console.log(obj1.hasOwnProperty("title"));

//Number
console.log("====== NUMBER ======");

const num1 = new Number(3.14);
console.log(num1 instanceof Number);

//String
console.log("====== STRING ======");
//문자열.bold();
//문자열.italics();
//문자열.fontcolor();
//문자열.link();

//Date
console.log("====== DATE ======");
const date1 = new Date('2002-12-31T18:30:14');
console.log(date1);
// console.log(date1.getFullYear());





