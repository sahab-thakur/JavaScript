//Dates


let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);


console.log(myDate.toString()); 
// toString() is a method of date objects, it converts the date to a string, in this case it will give us a string representation of the date in the format "Wed Jun 19 2024 12:00:00 GMT+0530 (India Standard Time)". 
// we can also use the toLocaleString() method to convert the date to a string in a specific locale, for example myDate.toLocaleString('en-US') will give us "6/19/2024, 12:00:00 PM" because we are formatting the date according to the US locale.
//  if we take myDate.toLocaleString('en-GB') it will give us "19/06/2024, 12:00:00" because we are formatting the date according to the UK locale. if we take myDate.toLocaleString('de-DE') it will give us "19.6.2024, 12:00:00" because we are formatting the date according to the German locale.

console.log(myDate.toDateString()); // it will give us a string representation of the date in the format "Wed Jun 19 2024". if we take myDate.toDateString() it will give us "Wed Jun 19 2024" because we are converting the date to a string in the format "Wed Jun 19 2024". 
// if we take myDate.toDateString() it will also give us "Wed Jun 19 2024" because we are converting the date to a string in the format "Wed Jun 19 2024".


console.log(myDate.toISOString());  // this method converts the date to a string in the ISO 8601 format, in this case it will give us "2024-06-19T06:30:00.000Z" because we are converting the date to a string in the ISO 8601 format. 
// if we take myDate.toISOString() it will also give us "2024-06-19T06:30:00.000Z" because we are converting the date to a string in the ISO 8601 format.


console.log(myDate.toJSON()); // from this method we can get the date in JSON format, in this case it will give us "2024-06-19T06:30:00.000Z" because we are converting the date to a string in the JSON format. 
// if we take myDate.toJSON() it will also give us "2024-06-19T06:30:00.000Z" because we are converting the date to a string in the JSON format.


console.log(myDate.toLocaleDateString()); // the result of this method will depend on the locale of the system, in this case it will give us "6/19/2024" because we are converting the date to a string in the format "6/19/2024". 
// if we take myDate.toLocaleDateString('en-GB') it will give us "19/06/2024" because we are converting the date to a string in the format "19/06/2024". if we take myDate.toLocaleDateString('de-DE') it will give us "19.6.2024" because we are converting the date to a string in the format "19.6.2024".

console.log(myDate.toLocaleString()); // using this method we can get the date and time in a string format, in this case it will give us "6/19/2024, 12:00:00 PM" because we are converting the date to a string in the format "6/19/2024, 12:00:00 PM".
// if we take myDate.toLocaleString('en-GB') it will give us "19/06/2024, 12:00:00" because we are converting the date to a string in the format "19/06/2024, 12:00:00". if we take myDate.toLocaleString('de-DE') it will give us "19.6.2024, 12:00:00" 
// because we are converting the date to a string in the format "19.6.2024, 12:00:00".

console.log(myDate.toTimeString()); // this method will give us a string representation of the time in the format "12:00:00 PM GMT+0530 (India Standard Time)". if we take myDate.toTimeString() it will give us "12:00:00 PM GMT+0530 (India Standard Time)" 
// because we are converting the time to a string in the format "12:00:00 PM GMT+0530 (India Standard Time)".
// if we take myDate.toTimeString() it will also give us "12:00:00 PM GMT+0530 (India Standard Time)" because we are converting the time to a string in the format "12:00:00 PM GMT+0530 (India Standard Time)".


// let myCreatedDate = new Date(2001, 0, 8); 
let myCreatedDate = new Date("01-14-2001");

// let myCreatedDate = new Date(2001, 5, 8, 12, 30, 45); // this will give us a date object with the date "Fri Jun 08 2001 12:30:45 GMT+0530 (India Standard Time)". if we take new Date(2001, 0, 8) it will give us a date object with the date "Mon Jan 08 2001 00:00:00 GMT+0530 (India Standard Time)" because we are creating a date object with the date "Mon Jan 08 2001".
// if we take new Date(2001, 11, 25) it will give us a date object with the date "Tue Dec 25 2001 00:00:00 GMT+0530 (India Standard Time)" because we are creating a date object with the date "Tue Dec 25 2001". if we take new Date(2001, 5, 8, 12, 30, 45) it will give us a date object with the date "Fri Jun 08 2001 12:30:45 GMT+0530 (India Standard Time)" because we are creating a date object with the date "Fri Jun 08 2001 12:30:45".;
console.log(myCreatedDate.toLocaleString());

console.log('====================================');

let myTimeStamp = Date.now(); // this will give us the current timestamp in milliseconds, in this case it will give us a number like 1624041600000 because we are getting the current timestamp in milliseconds. if we take Date.now() it will give us the current timestamp in milliseconds, in this case it will give us a number like 1624041600000 because we are getting the current timestamp in milliseconds.
console.log(myTimeStamp); // this will give us the current timestamp in milliseconds, in this case it will give us a number like 1624041600000 because we are getting the current timestamp in milliseconds. if we take Date.now() it will give us the current timestamp in milliseconds, in this case it will give us a number like 1624041600000 because we are getting the current timestamp in milliseconds.
console.log(myCreatedDate.getTime()); // this will give us the timestamp of the date object in milliseconds, in this case it will give us a number like 982233600000 because we are getting the timestamp of the date object in milliseconds. if we take myCreatedDate.getTime() it will give us the timestamp of the date object in milliseconds, in this case it will give us a number like 982233600000 because we are getting the timestamp of the date object in milliseconds.
console.log(Math.floor(Date.now()/1000));






