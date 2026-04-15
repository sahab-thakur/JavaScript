//primitive

// 7 Types of primitive data types in JavaScript
// 1. String => "Hello", 'Hello', `Hello`
// 2. Number => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10
// 3. Boolean => true or false
// 4. Null => null
// 5. Undefined => undefined
// 6. Symbol => Symbol("Hello")
// 7. BigInt => 1234567890123456789012345678901234567890n


const score = 100;  //number
const scoreValue = 100.3; //number

const isLoggedIn = false;  //boolean
const outsideTemp = null;  //null   
const userEmail = undefined;  //undefined

const id = Symbol("123"); //symbol
const anotherId = Symbol("123"); //symbol

console.log(id === anotherId); //false
console.log(id !== anotherId); //true

 const bigNumber = 1234567890123456789012345678901234567890n; //bigint





//Refrerence (Non primitive)

// Array, Objects, Functions
// 1. Array => [1, 2, 3, 4, 5], ["Hello", "World"], [1, "Hello", true]
// 2. Object => { name: "John", age: 30, city: "New York" }
// 3. Function => function add(a, b) { return a + b; }
