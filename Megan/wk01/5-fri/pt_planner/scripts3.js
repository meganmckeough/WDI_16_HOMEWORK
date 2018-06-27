//hardcodes for testing
var origin = "Flinders Street";
var destination = "Tooronga";

console.log("Origin: " + origin);
console.log("Destination: " + destination);

//objects of train lines
var trainLines = [
{
	name: "glenWaverley",
	stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	interchange: 3
},
{
	name: "alamein",
	stations: ["Flinders Street", "Richmond", "Kooyong", "Tooronga"],
	interchange: 1
},
{
	name: "sandringham",
	stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
	interchange: 1
}
];

// for comparing if one line or multiple
var trainLinesJourneyed = [];

//function to find which line travelling on and index of station
function findLines (stop) {
	for (i = 0; i < trainLines.length; i++) {
		if (trainLines[i].stations.includes(stop)) {
			trainLinesJourneyed.push(trainLines[i].name);
			return trainLines[i].stations.indexOf(stop);			
		}
	}
};	

var originIndex = findLines(origin);
var destinationIndex = findLines(destination);
// var richmondIndex = 

//printing to console the sliced stations and total stops
if (originIndex < destinationIndex && trainLinesJourneyed[0] === trainLinesJourneyed[1]) {
	console.log(trainLines[i].stations.slice(originIndex, destinationIndex + 1));
	console.log(destinationIndex - originIndex + " stops total");
} else if (originIndex > destinationIndex && trainLinesJourneyed[0] === trainLinesJourneyed[1]) {
	console.log(trainLines[i].stations.slice(destinationIndex, originIndex + 1).reverse(" "));
	console.log(originIndex - destinationIndex + " stops total");
} 
			

	




