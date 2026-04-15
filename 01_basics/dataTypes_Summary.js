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

const heros = ["Superman", "Batman", "Wonder Woman"]; //array

const myObj = {
    name: "Sahab",
    age: 24,
}

const myfunction = function () {
    console.log("Hello World!");
}


console.log(typeof bigNumber); //bigint
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myfunction); //function  //object function is a special type of object in JavaScript

console.log(typeof null); //object  //this is a bug in JavaScript, null should be of type null but it is of type object  
console.log(myObj);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// STACK & HEAP MEMORY

//  Stack memory = Primitive data types are stored in stack memory
// Heap memory = Reference data types are stored in heap memory

// Stack memory is faster than heap memory
// Primitive data types are immutable, meaning they cannot be changed after they are created
// Reference data types are mutable, meaning they can be changed after they are created


let myName = "Sahab";     //myName is stored in stack memory
let yourName = myName;    //yourName is stored in stack memory and it is a copy of myName
yourName = "Roman";       //yourName is changed to "Roman" but myName is still "Sahab" 
                          // because they are stored in stack memory and they are independent of each other

