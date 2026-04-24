const marvelHeroes = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow"]; 
const dcHeroes = ["Superman", "Batman", "Flash"];

marvelHeroes.push(dcHeroes); //push adds the entire array as a single element to the end of the array

console.log(marvelHeroes); //["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "Flash"]]