//hardcodes for testing
var origin = "Flinders Street";
var destination = "Tooronga";

console.log("origin: " + origin);
console.log("destination: " + destination);

//empty array to push station names for printing
//DO I STILL NEED THIS???
// var myJourney = [];

//objects of train lines
var trainLines = [
{
	name: "glenWaverley",
	stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
},
{
	name: "alamein",
	stations: ["Flinders Street", "Richmond", "Kooyong", "Tooronga"]
},
{
	name: "sandringham",
	stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}
];

var trainLinesJourneyed = [];

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

if (originIndex < destinationIndex && trainLinesJourneyed[0] === trainLinesJourneyed[1]) {
	console.log(trainLines[i].stations.slice(originIndex, destinationIndex + 1));
	console.log(destinationIndex - originIndex + " stops total");
} else if (originIndex > destinationIndex && trainLinesJourneyed[0] === trainLinesJourneyed[1]) {
	console.log(trainLines[i].stations.slice(destinationIndex, originIndex + 1).reverse(" "));
	console.log(originIndex - destinationIndex + " stops total");
} 
			

		// } else if (trainLines[i].stations[i].includes(origin || destination)) {
		// 	var originIndex = trainLines[i].stations[i].indexOf(origin);
		// 	var destinationIndex = trainLines[i].stations[i].indexOf(destination);
		// 	var trainLine = trainLines[i].name;
		// }

	

//a very convoluted way to get the arrow journey output!
// 





