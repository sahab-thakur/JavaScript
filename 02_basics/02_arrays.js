const marvelHeroes = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow"]; 
const dcHeroes = ["Superman", "Batman", "Flash"];

// marvelHeroes.push(dcHeroes); //push adds the entire array as a single element to the end of the array

// console.log(marvelHeroes); //["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "Flash"]]

// console.log(marvelHeroes[3][1]); //undefined because marvelHeroes[3] is "Hulk" which is a string and strings do not have an index 1

const allHeros=marvelHeroes.concat(dcHeroes); //concat does not modify the original array but returns a new array

 console.log(allHeros); //["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "Flash"]]



 