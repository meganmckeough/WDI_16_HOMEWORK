// TYPES 

// typeof 15
// // Prediction: Number
// // Actual: Number

// typeof 5.5
// // Prediction: Number
// // Actual: Number

// typeof NaN
// // Prediction: Number
// // Actual: Number

// typeof "hello"
// // Prediction: String
// // Actual: string

// typeof true
// // Prediction: Boolean
// // Actual: Boolean

// typeof 1 != 2
// // Prediction: number
// // Actual: true


// "hamburger" + "s"
// // Prediction: hamburgers
// // Actual: hamburgers

// "hamburgers" - "s"
// // Prediction: hamburger
// // Actual: NaN

// "1" + "3"
// // Prediction: 13
// // Actual: 13

// "1" - "3"
// // Prediction: Undefined
// // Actual: -2

// "johnny" + 5
// // Prediction: johnny5
// // Actual: johnny5

// "johnny" - 5
// // Prediction: Undefined
// // Actual: NaN

// 99 * "luftbaloons"
// // Prediction: "luftbaloons" 99 times?
// Actual: NaN

// ARRAYS

// 1. Add an element to the back of an array - push()

// var dogs = ["terrier", "greyhound", "kelpie"];
// dogs.push("bulldog");

// 2. Remove an element from the back of an array - pop()

// var burgers = ["mushroom", "haloumi", "vegetarian", "chicken"];
// burgers.pop("chicken");

// 3. Add an element to the front of an array. - unshift()

// var myFavouriteMaleActors = ["Colin Farrell", "Gary Oldman", "Jeff Goldblum"];
// myFavouriteMaleActors.unshift("Daniel Day Lewis");
// console.log(myFavouriteMaleActors);

// 4. Remove an element from the front of an array - shift()

// var myFavouriteComedians = ["Aziz Ansari", "Demetri Martin", "Wil Anderson"];
// myFavouriteComedians.shift("");
// console.log(myFavouriteComedians);

// 5. Concatenates all the elements in an array into a string. - join(separator);

// var breakfast = ["juice", "sausages", "pancakes", "coffee"];
// var whatIAte = breakfast.join(", ");
// console.log("Today I ate " + whatIAte);

// 6. Separates the characters of a string into an array. This one is a string method.

// var cars = "Honda Ford Holden Suzuki";
// var carsArray= [];
// carsArray = cars.split(" ");
// console.log(carsArray);

// ------ //
//assume adding each new command, not replacing each command
// var numbers = [2, 4, 6, 8]
// numbers.pop();  ---- 2, 4, 6
// numbers.push(10); -----2, 4, 6, 10
// numbers.unshift(3);  3, 2, 4, 6, 10

// -------//

// var morse = ["dot", "pause", "dot"];
// var moreMorse = morse.join(" dash ");
// moreMorse.split(" ");
// dot dash pause dash dot

// -------//
// var bands = []
// var beatles = ["Paul", "John", "George", "Pete"]
// var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
// bands.unshift(stones)
// bands[bands.length - 1].pop()
// bands[0].shift()
// bands[1][3] = "Ringo"
// NOTE: first bracket chooses the element var, second one is position in that array

// my guess
// var bands = [stones, beatles]
// var stones = ["Mick", "Keith", "Ronnie", "Charlie"]
// var beatles = ["Paul", "John", "George", "Ringo"]

// CONDITIONALS

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

//hardcoded var for testing
// var age = 17;

// if (age >= 75) {
// 	console.log("Are you sure you want to be here?");
// } else if (age < 18) {
// 	console.log("You're too young to be here!");
// } else if (age >= 21) {
// 	console.log("Come on in!");
// } else {
// 	console.log("Come on in! (but no drinking!)");
// } 

//bonus 
// Bar patrons must have an ID if the bouncer is even going to consider what age they are.

// If the patron has an ID, the bouncer will then check if they are of the proper age
// If the patron does not have an ID, the bouncer will tell them "No ID, no entry."

// var age = 35;
// var hasId = true;

// if (hasId === true) {
// 	checkAge();
// } else {
// 	console.log ("Sorry, no ID, no entry.");
// }


// function checkAge () {
// 	if (age >= 75) {
// 		console.log("Are you sure you want to be here?");
// 	} else if (age < 18) {
// 		console.log("You're too young to be here!");
// 	} else if (age >= 21) {
// 		console.log("Come on in!");
// 	} else {
// 		console.log("Come on in! (but no drinking!)");
// 	} 
// }




























