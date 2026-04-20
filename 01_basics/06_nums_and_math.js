const score = 400;


const balance = new Number(100); // this is a number object, it is created using the Number constructor function, it is an object that wraps a primitive number value. it has properties and methods that can be used to manipulate the number value. for example, we can use the toFixed() method to format the number to a specific number of decimal places.
// console.log(balance); // Number {100} is the number object that wraps the primitive number value 100. it has properties and methods that can be used to manipulate the number value. for example, we can use the toFixed() method to format the number to a specific number of decimal places.


// console.log(balance.toString()); // toString() is a method of number objects, it converts the number to a string, in this case it will give us "100" because the primitive number value of the balance object is 100. we can also use the String() function to convert a number to a string, for example String(balance) will also give us "100".

// console.log(balance.toString().length); // toString() is a method of number objects, it converts the number to a string, in this case it will give us "100" because the primitive number value of the balance object is 100. we can also use the String() function to convert a number to a string, for example String(balance) will also give us "100". length is a property of string objects, it gives us the length of the string, in this case it will give us 3 because "100" has 3 characters.
// console.log(balance.toFixed(2)); // toFixed() is a method of number objects, it formats the number to a specific number of decimal places, in this case it will give us "100.00" because we are formatting the number to 2 decimal places. if we take toFixed(0) it will give us "100" because it will round the number to the nearest integer. if we take toFixed(1) it will give us "100.0" because it will format the number to 1 decimal place.


const numberOne = 1123.89666 


// console.log(numberOne.toPrecision(3)); // toPrecision() is a method of number objects, it formats the number to a specific number of significant digits, in this case it will give us "23.9" because we are formatting the number to 3 significant digits. if we take toPrecision(2) it will give us "24" because it will round the number to 2 significant digits. if we take toPrecision(4) it will give us "23.90" because it will format the number to 4 significant digits.

const hundreds = 1000000000; 
// console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() is a method of number objects, it formats the number according to the specified locale, in this case it will give us "1,00,00,00,000" because we are formatting the number according to the Indian locale. if we take toLocaleString('en-US') it will give us "1,000,000,000" because we are formatting the number according to the US locale. if we take toLocaleString('de-DE') it will give us "


//++++++++++++++++++MATHS++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4)); // abs() is a method of the Math object, it returns the absolute value of a number, in this case it will give us 4 because the absolute value of -4 is 4. if we take Math.abs(4) it will also give us 4 because the absolute value of 4 is 4. if we take Math.abs(0) it will give us 0 because the absolute value of 0 is 0.
// console.log(Math.round(4.6)); // round() is a method of the Math object, it rounds a number to the nearest integer, in this case it will give us 5 because 4.6 is closer to 5 than it is to 4. if we take Math.round(4.4) it will give us 4 because 4.4 is closer to 4 than it is to 5. if we take Math.round(4.5) it will give us 5 because 4.5 is exactly in the middle of 4 and 5, and in this case it will round up to the nearest integer.
// console.log(Math.ceil(4.2)); // ceil() is a method of the Math object, it rounds a number up to the nearest integer, in this case it will give us 5 because 4.2 is rounded up to 5. if we take Math.ceil(4.8) it will also give us 5 because 4.8 is rounded up to 5. if we take Math.ceil(4) it will give us 4 because 4 is already an integer and it is not rounded up.
// console.log(Math.floor(4.9)); // floor() is a method of the Math object, it rounds a number down to the nearest integer, in this case it will give us 4 because 4.9 is rounded down to 4. if we take Math.floor(4.2) it will also give us 4 because 4.2 is rounded down to 4. if we take Math.floor(4) it will give us 4 because 4 is already an integer and it is not rounded down.
// console.log(Math.min(2,4,6,8,9,11,15,-4)); // min() is a method of the Math object, it returns the smallest of zero or more numbers, in this case it will give us -4 because -4 is the smallest number among 2, 4, 6, 8, 9, 11, 15 and -4. if we take Math.min(2,4,6) it will give us 2 because 2 is the smallest number among 2, 4 and 6. if we take Math.min(-1,-5,-3) it will give us -5 because -5 is the smallest number among -1, -5 and -3.
// console.log(Math.max(1,3,5,6,8,9,7,4,1,5,8,9,6,-9,-8,-2,-1));

//Math.random


console.log(Math.random()); // random() is a method of the Math object, it returns a random number between 0 (inclusive) and 1 (exclusive), in this case it will give us a random number between 0 and 1. if we take Math.random() * 10 it will give us a random number between 0 and 10. if we take Math.random() * 100 it will give us a random number between 0 and 100. if we take Math.random() * 1000 it will give us a random number between 0 and 1000. if we take Math.random() * 1000000 it will give us a random number between 0 and 1000000. if we take Math.random() * 1000000000 it will give us a random number between 0 and 1000000000.
console.log(Math.random()*10); // this will give us a random number between 0 and 10. if we take Math.random() * 100 it will give us a random number between 0 and 100. if we take Math.random() * 1000 it will give us a random number between 0 and 1000. if we take Math.random() * 1000000 it will give us a random number between 0 and 1000000. if we take Math.random() * 1000000000 it will give us a random number between 0 and 1000000000.
console.log((Math.random()*10) + 1); // this will give us a random number between 1 and 11. if we take (Math.random() * 10) + 1 it will give us a random number between 1 and 11. if we take (Math.random() * 100) + 1 it will give us a random number between 1 and 101. if we take (Math.random() * 1000) + 1 it will give us a random number between 1 and 1001. if we take (Math.random() * 1000000) + 1 it will give us a random number between 1 and 1000001. if we take (Math.random() * 1000000000) + 1 it will give us a random number between 1 and 1000000001.
console.log(Math.floor (Math.random()*10) + 1); // this will give us a random integer between 1 and 10. if we take Math.floor((Math.random() * 10) + 1) it will give us a random integer between 1 and 10. if we take Math.floor((Math.random() * 100) + 1) it will give us a random integer between 1 and 100. if we take Math.floor((Math.random() * 1000) + 1) it will give us a random integer between 1 and 1000. if we take Math.floor((Math.random() * 1000000) + 1) it will give us a random integer between 1 and 1000000. if we take Math.floor((Math.random() * 1000000000) + 1) it will give us a random integer between 1 and 1000000000.


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1) + min)); // this will give us a random integer between 10 and 20. if we take Math.floor(Math.random() * (max - min + 1) + min) it will give us a random integer between 10 and 20. if we take Math.floor(Math.random() * (max - min + 1) + min) it will give us a random integer between 10 and 20. if we take Math.floor(Math.random() * (max - min + 1) + min) it will give us a random integer between 10 and 20. if we take Math.floor(Math.random() * (max - min + 1) + min) it will give us a random integer between 10 and 20. if we take Math.floor(Math.random() * (max - min + 1) + min) it will give us a random integer between 10 and 20.




