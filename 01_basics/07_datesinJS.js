//Dates


let myDate = new Date();
console.log(myDate);

console.log(myDate.toString()); 
// toString() is a method of date objects, it converts the date to a string, in this case it will give us a string representation of the date in the format "Wed Jun 19 2024 12:00:00 GMT+0530 (India Standard Time)". 
// we can also use the toLocaleString() method to convert the date to a string in a specific locale, for example myDate.toLocaleString('en-US') will give us "6/19/2024, 12:00:00 PM" because we are formatting the date according to the US locale.
//  if we take myDate.toLocaleString('en-GB') it will give us "19/06/2024, 12:00:00" because we are formatting the date according to the UK locale. if we take myDate.toLocaleString('de-DE') it will give us "19.6.2024, 12:00:00" because we are formatting the date according to the German locale.

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());




