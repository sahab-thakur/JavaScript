//Dates


let myDate = new Date();
console.log(myDate);

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





