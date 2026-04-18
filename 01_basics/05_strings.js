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
console.log(gameName.toLowerCase); //toLowerCase is a method of string objects, it converts the string to lowercase, in this case it will give us "bgmi" because "BGMI" is in uppercase.
//  we need to call the method using parentheses like gameName.toLowerCase() to get the result. without parentheses it will give us the function definition of the method.
console.log(gameName.toUpperCase()); //toUpperCase is a method of string objects, it converts the string to uppercase, in this case it will give us "BGMI" because "BGMI" is already in uppercase.
console.log(gameName.charAt(2)); //charAt is a method of string objects, it gives us the character at the specified index, in this case it will give us "M" because "BGMI" has "M" at index 2.
console.log(gameName.indexOf("B")); //indexOf is a method of string objects, it gives us the index of the first occurrence of the specified character, in this case it will give us 0 because "B" is at index 0 in "BGMI".

const newString = gameName.substring(0,3); //substring is a method of string objects, it gives us a substring of the string from the specified start index to the specified end index, 
// in this case it will give us "BGMI" because we are taking the substring from index 0 to index 4 (not inclusive).
console.log(newString); //BGMI is the original string, newString is the substring of gameName from index 0 to index 3 (not inclusive), so it will give us "BGM".

const anotherString = gameName.slice((-4, 2)); // BGMI slice is a method of string objects, it gives us a substring of the string from the specified start index to the specified end index, 
// in this case it will give us "BG" because we are taking the substring from index -4 to index 2 (not inclusive). slice can also take negative index which means it will start from the end of the string, 
// so index -4 will give us the first character of the string which is "B", and index 2 will give us the third character of the string which is "G". so it will give us "BG". 
// if we take slice(0, -1) it will give us "BGM" because it will take the substring from index 0 to index -1 (not inclusive) which means it will take all characters except the last character of the string. 
// if we take slice(-3) it will give us "GMI" because it will take the substring from index -3 to the end of the string which means it will take the last 3 characters of the string.
console.log(anotherString);


const anotherStringOne = "    Sahab         " //trim is a method of string objects, it removes the whitespace from both ends of the string, in this case it will give us "Sahab" 
// because it will remove the whitespace from both ends of the string. if we take trimStart() it will remove the whitespace from the start of the string and if we take trimEnd() it will remove the whitespace from the end of the string.
console.log(anotherStringOne); 
console.log(anotherStringOne.trim()); //Sahab is the original string, anotherStringOne is the string with whitespace, and anotherStringOne.trim() is the string with whitespace removed from both ends of the string, so it will give us "Sahab".

const url = "https://www.sahab.com/sahab%20singh"; //split is a method of string objects, it splits the string into an array of substrings based on the specified separator, in this case it will give us ["https:", "", "www.youtube.com", "watch?v=1234567890"] because we are splitting the string based on the separator "/".

console.log(url.replace('$20', '-')); //replace is a method of string objects, it replaces the specified value with the specified new value in the string, in this case it will give us "https://www.sahab.com/sahab-singh" because we are replacing the value "%20" with the value "-" in the string.

console.log(url.includes('sahab')); //includes is a method of string objects, it checks if the string contains the specified value, in this case it will give us true because "Sahab" is present in the string "https://www.sahab.com/sahab%20singh".


const stringOne = "Sahab-Singh-Thakur";
console.log(stringOne.split("-")); //split is a method of string objects, it splits the string into an array of substrings based on the specified separator, in this case it will give us ["Sahab", "Singh", "Thakur"] because we are splitting the string based on the separator "-" which means we are splitting the string into individual substrings. 
// if we take split(" ") it will split the string based on the separator " " which means it will split the string into words. if we take split("i") it will split the string based on the separator "i" which means it will split the string into substrings based on the character "i"

console.log(stringOne.search("b"));



