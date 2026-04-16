const name =  "Sahab"; //String literal
const repoCount = 50

// console.log(name + repoCount + "value"); //old syntax now we use template literals

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //template literals morden syntax
//  string interpolation, it is more readable and easier to use than string concatenation.

const gameName = new String("BGMI"); //String constructor, it creates a string object, it is not a primitive string, 
// it is an object that contains a primitive string value. we can access the primitive string value using the valueOf() method of the string object. gameName.valueOf() will give us the primitive string value "BGMI".
//console.log(gameName); //String constructor creates a string object, it is not a primitive string, it is an object that contains a primitive string value.
console.log(gameName[1]); //string is an array of characters, we can access each character of the string using its index, index starts from 0, 
// so gameName[1] will give us the second character of the string which is "G".
console.log(gameName.__proto__); //String.prototype, it is the prototype of all string objects, it contains all the methods and properties of string objects.


console.log(gameName.length); //length is a property of string objects, it gives us the length of the string, in this case it will give us 4 because "BGMI" has 4 characters.
console.log(gameName.toLowerCase); //toLowerCase is a method of string objects, it converts the string to lowercase, in this case it will give us "bgmi" because "BGMI" is in uppercase. we need to call the method using parentheses like gameName.toLowerCase() to get the result. without parentheses it will give us the function definition of the method.
console.log(gameName.toUpperCase()); //toUpperCase is a method of string objects, it converts the string to uppercase, in this case it will give us "BGMI" because "BGMI" is already in uppercase.
console.log(gameName.charAt(2)); //charAt is a method of string objects, it gives us the character at the specified index, in this case it will give us "M" because "BGMI" has "M" at index 2.
console.log(gameName.indexOf("B")); //indexOf is a method of string objects, it gives us the index of the first occurrence of the specified character, in this case it will give us 0 because "B" is at index 0 in "BGMI".

const newString = gameName.substring(0,3); //substring is a method of string objects, it gives us a substring of the string from the specified start index to the specified end index, in this case it will give us "BGMI" because we are taking the substring from index 0 to index 4 (not inclusive).
console.log(newString); //BGMI









