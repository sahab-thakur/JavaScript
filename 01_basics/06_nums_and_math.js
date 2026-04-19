const score = 400;


const balance = new Number(100); // this is a number object, it is created using the Number constructor function, it is an object that wraps a primitive number value. it has properties and methods that can be used to manipulate the number value. for example, we can use the toFixed() method to format the number to a specific number of decimal places.
console.log(balance); // Number {100} is the number object that wraps the primitive number value 100. it has properties and methods that can be used to manipulate the number value. for example, we can use the toFixed() method to format the number to a specific number of decimal places.


console.log(balance.toString()); // toString() is a method of number objects, it converts the number to a string, in this case it will give us "100" because the primitive number value of the balance object is 100. we can also use the String() function to convert a number to a string, for example String(balance) will also give us "100".

console.log(balance.toString().length); // toString() is a method of number objects, it converts the number to a string, in this case it will give us "100" because the primitive number value of the balance object is 100. we can also use the String() function to convert a number to a string, for example String(balance) will also give us "100". length is a property of string objects, it gives us the length of the string, in this case it will give us 3 because "100" has 3 characters.
console.log(balance.toFixed(2)); // toFixed() is a method of number objects, it formats the number to a specific number of decimal places, in this case it will give us "100.00" because we are formatting the number to 2 decimal places. if we take toFixed(0) it will give us "100" because it will round the number to the nearest integer. if we take toFixed(1) it will give us "100.0" because it will format the number to 1 decimal place.



const numberOne = 1123.89666 


console.log(numberOne.toPrecision(3)); // toPrecision() is a method of number objects, it formats the number to a specific number of significant digits, in this case it will give us "23.9" because we are formatting the number to 3 significant digits. if we take toPrecision(2) it will give us "24" because it will round the number to 2 significant digits. if we take toPrecision(4) it will give us "23.90" because it will format the number to 4 significant digits.

const hundreds = 1000000000; 
console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() is a method of number objects, it formats the number according to the specified locale, in this case it will give us "1,00,00,00,000" because we are formatting the number according to the Indian locale. if we take toLocaleString('en-US') it will give us "1,000,000,000" because we are formatting the number according to the US locale. if we take toLocaleString('de-DE') it will give us "
