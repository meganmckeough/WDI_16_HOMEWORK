//hardcodes for testing
var origin = "Burnley";
var destination = "Flagstaff";

//empty array to push station names for printing
var myJourney = [];

//arrays of train lines
var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var alamein = ["Flinders Street", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];


var originIndex = glenWaverley.indexOf(origin);
var destinationIndex = glenWaverley.indexOf(destination);

// function to slice out the stations from array
function findStops () {
	if (originIndex < destinationIndex) {
		return glenWaverley.slice(originIndex, destinationIndex + 1);
	} else {
		return glenWaverley.slice(destinationIndex, originIndex + 1).reverse(" ");
	}
};


//a very convoluted way to get the arrow journey output!
// for (i = 0; i < destinationIndex - 2; i++) {
// 	myJourney.push(findingStations[i] + " ---> ");
// }

//printing the output

console.log("origin: " + origin);
console.log("destination: " + destination);
console.log(myJourney = findStops());
if (originIndex < destinationIndex) {	
	console.log(destinationIndex - originIndex + " stops total");	
} else {
	console.log(originIndex - destinationIndex + " stops total");
}

// console.log(myJourney);


