const marvelHeroes = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow"]; 
const dcHeroes = ["Superman", "Batman", "Flash"];

// marvelHeroes.push(dcHeroes); //push adds the entire array as a single element to the end of the array

// console.log(marvelHeroes); //["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "Flash"]]

// console.log(marvelHeroes[3][1]); //undefined because marvelHeroes[3] is "Hulk" which is a string and strings do not have an index 1

const allHeros=marvelHeroes.concat(dcHeroes); //concat does not modify the original array but returns a new array

 //console.log(allHeros); //["Ironman", "Captain America", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "Flash"]]

const all_new_heros = [...marvelHeroes, ...dcHeroes];
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7, [6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
 console.log(real_another_array);
 




 console.log(Array.isArray("Sahab"));
 console.log(Array.from("Sahab"));

 console.log((Array.from({name:"Sahab"}))); //this will give empty array because we have to tell to make array of keys or values // interesting fo interviews
 

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1, score2, score3));
 

