//hardcodes for testing
var origin = "East Richmond";
var destination = "Melbourne Central";

//empty array to push station names for printing
var myJourney = [];

//arrays of train lines
var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];

var originIndex = glenWaverley.indexOf(origin);
var destinationIndex = glenWaverley.indexOf(destination);


//a very convoluted way to get the arrow journey output!
if (originIndex < destinationIndex) {
	glenWaverley.slice(originIndex, destinationIndex);
	myJourney.push();
} else {
	glenWaverley.slice(destinationIndex, originIndex);
	myJourney.push();
	myJourney.reverse(" ");
};


// for (i = 0; i < destinationIndex - 2; i++) {
// 	myJourney.push(findingStations[i] + " ---> ");
// }


myJourney.push(destination);

//printing the output
console.log("origin: " + origin);
console.log("destination: " + destination);
console.log(myJourney);
console.log(myJourney.length - 1 + " stops total")

console.log(originIndex, destinationIndex);

