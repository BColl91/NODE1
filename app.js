// const myFunctions = require('./maths'); ////including a module
// console.log(myFunctions.add(2, 5));
// console.log(myFunctions.subtract(5, 2));
// console.log(myFunctions.multiply(2, 15));
// console.log(myFunctions.divide(100, 4));


const { add, subtract, multiply, divide } = require('./maths'); //object destructuring
console.log(add(2, 5));
console.log(subtract(5, 2));
console.log(multiply(2, 15));
console.log(divide(100, 4));
