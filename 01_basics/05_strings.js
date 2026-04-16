const name =  "Sahab"; //String literal
const repoCount = 50

// console.log(name + repoCount + "value"); //old syntax now we use template literals

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //template literals morden syntax
//  string interpolation, it is more readable and easier to use than string concatenation.

const gameName = new String("BGMI"); //String constructor, it creates a string object, it is not a primitive string, 
// it is an object that contains a primitive string value. we can access the primitive string value using the valueOf() method of the string object. gameName.valueOf() will give us the primitive string value "BGMI".
console.log(gameName); //String constructor creates a string object, it is not a primitive string, it is an object that contains a primitive string value.
console.log(gameName[1]); //string is an array of characters, we can access each character of the string using its index, index starts from 0, 
// so gameName[1] will give us the second character of the string which is "G".
console.log(gameName.__proto__); //String.prototype, it is the prototype of all string objects, it contains all the methods and properties of string objects.









