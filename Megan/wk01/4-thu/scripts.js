// 1. concatenation

// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'


// function combineWords (word1,word2) {
// 	return word1 + word2;
// }

// var result = combineWords('cheese', 'grater');
// console.log(result);

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// function calculateAge (birthYear, currentYear) {
// 	var age1 = (currentYear - birthYear) - 1;
// 	var age2 = (currentYear - birthYear);
// 	console.log("You are either " + age1 + " or " + age2);
// };

// calculateAge(1984, 2018);
// calculateAge(1946, 2018);
// calculateAge(2000,2018);

// 3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

//I got the below the work but I don't know if it's what the exercise was after?

// var myArray = ["pie", "chips", "burger", "icecream"];
// var stringLengthArray = [];

// function findStringLengths () {
// 	for (i = 0; i < 4; i++) {
// 		var stringLength = myArray[i].length;	
// 		stringLengthArray.push(stringLength);
// 	}
// }

// findStringLengths();
// console.log(stringLengthArray);	

// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// function transmogrifier (num1,num2,num3) {
// 	var product = num1 + num2;
// 	var powerOf = Math.pow(product, num3);
// 	console.log(powerOf);
// }

// transmogrifier(1,4,2);

//Still working on 5. 

// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'


var string = "you are a potato";

function wordReverse (string) {
	var reversed = string.split('').reverse().join('');
	console.log(reversed);
}

wordReverse();


